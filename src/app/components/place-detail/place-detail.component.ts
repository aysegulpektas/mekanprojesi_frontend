import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/models/place';
import { PlaceImage } from 'src/app/models/placeimage';
import { PlaceService } from 'src/app/services/place.service';
import { PlaceimageService } from 'src/app/services/placesimage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private placeImageService:PlaceimageService,private placeService:PlaceService) { }
  placeId:number;
  place:Place;
  placeImages:PlaceImage[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res=>{
      this.placeId = res['placeId'];
      this.placeService.getPlaceById(this.placeId).subscribe(res=>{
        this.place = res.data;
      })
      this.placeImageService.getPlacesImagesByPlaceId(this.placeId).subscribe(res=>{
        this.placeImages = res.data;
        this.placeImages.forEach((res)=>{
          res.imagePath = environment.url+res.imagePath;
        })
        
      })
    })
  }
  isActive(placeImage:PlaceImage){
    if(this.placeImages[0].id == placeImage.id){
      return "active";
    }
    return "";
  }

}
