import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from '../model/login-model';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { saveLoginDetails } from 'src/app/state/login/login.action';
import { SelectLoginDetails } from 'src/app/state/login/login.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  public loginDetails!:LoginModel;
  public formSubmitted:boolean = false;
  public loginState$ = this.store.select(SelectLoginDetails)

  loginDetailsForm = this.fb.nonNullable.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(8)]]
  })

  constructor(private store:Store<AppState>,private fb:FormBuilder,private router:Router){
  }

  ngOnInit(): void {
    this.loginState$.subscribe(
      (response)=>{
        if(response.loginFlag===true){
          this.router.navigate((['/home']))
        }
      }
    )
  }

  onSubmit(){
    if(this.loginDetailsForm.valid){
      this.loginDetails = this.loginDetailsForm.value;
      this.loginDetails.loginFlag=true;
      this.store.dispatch(saveLoginDetails({loginDetails:this.loginDetails}))
      this.router.navigate(['/home'])
    }
    else{
      this.formSubmitted = true;
    }
  }
}
