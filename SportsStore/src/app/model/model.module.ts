import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './cart';
import { Order } from './order';
import { OrderRepository } from './order-repository';
import { ProductRepository } from './product.service';
import { RestDataSource } from './rest.datasource';
import { StaticDataSource } from './static-data-source';
 


@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ]
  ,providers :  [ProductRepository, StaticDataSource, CartService, Order, OrderRepository, { provide: StaticDataSource, useClass: RestDataSource }]
})
export class ModelModule { }
