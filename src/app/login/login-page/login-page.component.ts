import { Component } from '@angular/core';
import { NavbarService } from 'src/app/shared/service/navbar.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private _ns:NavbarService){
    this._ns.navbarActiveField="login";
  }

}
