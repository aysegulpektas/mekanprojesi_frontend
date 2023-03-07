import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Place } from '../models/place';
import { PlaceCover } from '../models/placeCover';
import { ResponceModel } from '../models/responceModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  apiUrl = 'https://localhost:44376/api/';


  constructor(private httpClient:HttpClient) { }


  getPlaces():Observable<ListResponseModel<Place>> {
    let newPath = this.apiUrl + "places/getall"
    return this.httpClient.get<ListResponseModel<Place>>(newPath);
  }
  getPlacesWithCover():Observable<ListResponseModel<PlaceCover>>{
    let newPath = this.apiUrl + "places/getallwithcover"
    return this.httpClient.get<ListResponseModel<PlaceCover>>(newPath);
  }

  // GetPlaces():Observable<ListResponseModel<Place>>{
  //   return this.httpClient.get<ListResponseModel<Place>>("https://localhost:5001/api/places/getall");

  // }

  getPlacesByCategory(categoryId:number):Observable<ListResponseModel<PlaceCover>> {
    let newPath = this.apiUrl + "places/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<PlaceCover>>(newPath);
  }

  add(place:Place):Observable<ResponceModel>{
    return this.httpClient.post<ResponceModel>(this.apiUrl+"places/add",place)
  }

  getPlaceById(placeId:number):Observable<SingleResponseModel<Place>>{
    return this.httpClient.get<SingleResponseModel<Place>>(this.apiUrl+"places/getbyid?id="+placeId);
  }
  //getPlacesByCategory(categoryId: number) {
    //throw new Error('Method not implemented.');
  //}

  //*add(place:Place):Observable<ResponceModel>{
    //return this.httpClient.post<ResponceModel>(this.apiUrl+"products/add",place)
 // }

}
