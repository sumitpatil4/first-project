import { createReducer ,on, Action } from '@ngrx/store';
import { saveProductList } from './home.action'; 
import { ProductModel } from 'src/app/home/model/product-model'; 

export interface ProductSate {
    productList:ProductModel[];
}

export const initialState:ProductSate ={
    productList:[]
}

export const ProductReducer = createReducer(
    initialState,
    on(saveProductList,(state,{productList})=>({
        ...state,
        productList:productList
    }))
)