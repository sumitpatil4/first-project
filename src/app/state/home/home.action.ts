import { createAction, props } from "@ngrx/store";
import { ProductModel } from "src/app/home/model/product-model"; 

export const saveProductList = createAction(
    '[Product Data] Save Product List',
    props<{productList:ProductModel[]}>()
);

export const loadProductList = createAction(
    '[Product Data] Load Product List'
)