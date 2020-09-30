import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './cart';
import { OrderService } from './order';
import { OrderRepository } from './order-repository';
import { ProductRepository } from './product.service';
import { RestDataSourceService } from './rest.datasource';
import { StaticDataSourceService } from './static-data-source';
import {AuthService} from './auth.service';








@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule]
  ,providers :  [ProductRepository, StaticDataSourceService, CartService, OrderService, OrderRepository, 
    { provide: StaticDataSourceService, useClass: RestDataSourceService,},
    RestDataSourceService, AuthService]
})
export class ModelModule { }
