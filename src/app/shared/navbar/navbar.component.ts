import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { SelectLoginDetails } from 'src/app/state/login/login.selector';
import { saveLoginDetails } from 'src/app/state/login/login.action';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  public loginState$ = this.store.select(SelectLoginDetails)
  loginFlag:boolean=false;
  constructor(private store:Store<AppState>,public _ns:NavbarService, private router:Router){
  }
  ngOnInit(): void {
    this.getLoginState()
  }

  itemClicked(value:string){
    if(value === 'login' && this.loginFlag===true){
      this.store.dispatch(saveLoginDetails({loginDetails:{email:'',password:'',loginFlag:false}}));
      this.getLoginState();
    }
    else{
      this._ns.navbarActiveField=value;
      this.router.navigate([`/${value}`])
    }
  }

  getLoginState(){
    this.loginState$.subscribe(
      (response)=>{
        this.loginFlag=response.loginFlag || false;
      }
    )
  }
}
