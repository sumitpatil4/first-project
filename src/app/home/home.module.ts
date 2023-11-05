import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './home-page/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from '../state/home/home.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../state/home/home.effects';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    HomepageComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class HomeModule { }
