import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../model/product-model';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { loadProductList, saveProductList } from 'src/app/state/home/home.action';
import { selectProductList } from 'src/app/state/home/home.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  productList:ProductModel[]=[];

  constructor(private store:Store<AppState>){}

  ngOnInit(){
    // this.store.dispatch(saveProductList({productList:this.productList}))
    this.store.dispatch(loadProductList());
    this.store.select(selectProductList).subscribe(
      (response)=>{this.productList=response}
    );
  }

}
