import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
 
import { StoreComponent } from '../store.component';
import { CounterDirective } from '../counter.directive';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { ModelModule } from 'src/app/model/model.module';


@NgModule({
  imports: [ModelModule, BrowserModule, CommonModule, FormsModule, RouterModule],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailsComponent, CheckoutComponent],
  exports: [StoreComponent, CartDetailsComponent, CheckoutComponent]
})
export class StoreModule { 

  
}
