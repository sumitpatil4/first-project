import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { LoginState } from './login.reducer'; 

export const selectLogin = (state:AppState)=>state.loginDetails;
export const SelectLoginDetails = createSelector(
    selectLogin,
    (state:LoginState)=>state.loginDetails
)