import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { BindingsComponent } from './bindings/bindings.component';
import { RatingComponent } from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    BindingsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
