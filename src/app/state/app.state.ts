import { ActionReducerMap } from "@ngrx/store";
import { ProductReducer, ProductSate } from "./home/home.reducer";
import { LoginReducer, LoginState } from "./login/login.reducer";

export interface AppState{
    loginDetails:LoginState,
    productList:ProductSate
}

export const reducer:ActionReducerMap<AppState>={
    loginDetails: LoginReducer,
    productList: ProductReducer
}