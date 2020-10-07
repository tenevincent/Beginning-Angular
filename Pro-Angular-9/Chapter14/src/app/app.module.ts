import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Product2Component } from './product2/product2.component';



@NgModule({
  declarations: [ProductComponent, Product2Component],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
