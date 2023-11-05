import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state'; 
import { ProductSate } from './home.reducer'; 

export const selectProduct = (state:AppState)=>state.productList;
export const selectProductList = createSelector(
    selectProduct,
    (state:ProductSate)=>state.productList
)