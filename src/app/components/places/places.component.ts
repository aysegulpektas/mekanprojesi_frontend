import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Place } from 'src/app/models/place';
import { PlaceCover } from 'src/app/models/placeCover';
import { CartService } from 'src/app/services/cart.service';
import { PlaceService } from 'src/app/services/place.service';
import { PlaceimageService } from 'src/app/services/placesimage.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places:PlaceCover[];
  dataLoaded = false ;
  filterText="";
  placesimageServise: any;
  getPlaceImage: any;
  PlacesimageServise: any;
  
  constructor(private placeService:PlaceService,
    private activedRoute:ActivatedRoute, 
    private toastrService:ToastrService,
    private cartService: CartService
) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getPlacesByCategory(params["categoryId"])
      }else{
        this.getPlaces()
      }
    })
  }

  
  getPlaces(){
    this.placeService.getPlacesWithCover().subscribe(res=>{
      this.places = res.data;
      this.places.forEach(element => {
        if(element.coverImage != null)
          element.coverImage = environment.url+element.coverImage;
        else
        element.coverImage = environment.url+"/PlaceImages/default.png";
      });
      //console.log(this.places);
      this.dataLoaded = true;
    });

  }
  getPlacesByCategory(categoryId:number) {
    this.placeService.getPlacesByCategory(categoryId).subscribe(res=>{
      this.places= res.data;
      this.places.forEach(element => {
        if(element.coverImage != null)
          element.coverImage = environment.url+element.coverImage;
        else
        element.coverImage = environment.url+"/PlaceImages/default.png";
      });
      this.dataLoaded = true;
    })


  }
  addToCart(place:Place){
    
    if(place.placeId===1){
      this.toastrService.error("Hata","seçtiğiniz mekan kiralanamaz")
    }else{
      this.toastrService.success("Sepete eklendi",place.placeName)
      this.cartService.addToCar(place);
    }
  }
  getPlacesImageByPlaceId(placeId:number){
    this.placesimageServise.getPlacesImageByPlaceId(placeId).subscribe((response: { data: any[]; })=>{
    this.getPlaceImage.push(response.data[0]);
    })
    
  }

}
