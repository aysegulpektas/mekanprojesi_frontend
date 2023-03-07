
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaceImage } from '../models/placeimage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponceModel } from '../models/responceModel';


@Injectable({
  providedIn: 'root'
})
export class PlaceimageService {
  apiUrl = "https://localhost:44376/api/"
  
  constructor(private httpClient:HttpClient) { }
   add(addImageModel:FormData):Observable<ResponceModel>{
    let newPath = this.apiUrl +"placeimages/add";
   return this.httpClient.post<ListResponseModel<PlaceImage>>(newPath,addImageModel);
  }


  getPlaceImages():Observable<ListResponseModel<PlaceImage>> {
    let newPath = this.apiUrl + "placeimages/getall"
    return this.httpClient.get<ListResponseModel<PlaceImage>>(newPath);
  }



   getPlacesImagesByPlaceId(placeId:number):Observable<ListResponseModel<PlaceImage>> {
    let newPath = this.apiUrl + "placeimages/getbyplaceid?placeid="+placeId;
    return this.httpClient.get<ListResponseModel<PlaceImage>>(newPath);
   }

}