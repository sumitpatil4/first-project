import { Component } from '@angular/core';
import { ProductModel } from '../model/product-model';
import { NavbarService } from 'src/app/shared/service/navbar.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private _ns:NavbarService){
    this._ns.navbarActiveField="home";
  }



}
