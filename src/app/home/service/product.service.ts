import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }
  API_BASE_URL:string = "https://fakestoreapi.com/products/category/electronics"

  getProductList():Observable<any>{
    return this._http.get<ProductModel[]>(this.API_BASE_URL)
  }
}
