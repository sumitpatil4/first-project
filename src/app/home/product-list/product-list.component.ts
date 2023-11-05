import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../model/product-model';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { loadProductList, saveProductList } from 'src/app/state/home/home.action';
import { selectProductList } from 'src/app/state/home/home.selector';
import { NavbarService } from 'src/app/shared/service/navbar.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  productList:ProductModel[]=[];

  selectedProduct!:ProductModel;

  constructor(private store:Store<AppState>,public _ns:NavbarService){
  }

  ngOnInit(){
    // this.store.dispatch(saveProductList({productList:this.productList}))
    this.store.dispatch(loadProductList());
    this.store.select(selectProductList).subscribe(
      (response)=>{this.productList=response}
    );
  }

  selectProduct(selectedProduct:ProductModel){
    this._ns.navbarActiveField=""
    this._ns.selectProductFlag=true;
    this.selectedProduct=selectedProduct;
  }

}
