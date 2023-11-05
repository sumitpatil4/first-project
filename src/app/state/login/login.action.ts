import { createAction, props } from "@ngrx/store";
import { LoginModel } from "src/app/login/model/login-model";

export const saveLoginDetails = createAction(
    '[Login Form] Save Login Details',
    props<{loginDetails:LoginModel}>()
)