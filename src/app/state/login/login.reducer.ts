import { createReducer ,on, Action } from '@ngrx/store';
import { saveLoginDetails } from './login.action'; 
import { LoginModel } from 'src/app/login/model/login-model';

export interface LoginState{
    loginDetails:LoginModel;
}

export const initialState:LoginState={
    loginDetails:{email:'',password:'',loginFlag:false}
}

export const LoginReducer = createReducer(
    initialState,
    on(saveLoginDetails,(state,{loginDetails})=>({
        ...state,
        loginDetails:loginDetails
    }))
)