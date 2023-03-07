import { ResponceModel } from './../models/responceModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  [x: string]: any;

  apiUrl="https://localhost:44376/api/categories/getall";
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);

  }
  add(category:Category):Observable<ResponceModel>{
    return this.httpClient.post<ResponceModel>("https://localhost:44376/api/categories/add",category);
  }

}
