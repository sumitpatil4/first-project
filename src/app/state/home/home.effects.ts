import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { saveProductList,loadProductList } from './home.action'; 
import { catchError, map, switchMap } from 'rxjs';
import { ProductModel } from 'src/app/home/model/product-model';
import { ProductService } from 'src/app/home/service/product.service';

@Injectable()
export class ProductEffects{
    constructor(
        private actions$:Actions,
        private store:Store<AppState>,
        private ps:ProductService
    ){}

    loadProductList$ = createEffect(()=>
        this.actions$.pipe(
            ofType(loadProductList),
            switchMap(()=>this.ps.getProductList().pipe(
                map((res)=>saveProductList({productList:res}))
            ))
        )
    )
}