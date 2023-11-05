import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  public navbarActiveField:string="";
  constructor() { }
}
