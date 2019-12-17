import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ProductsComponent } from './products/products.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    JumbotronComponent,
    ProductsComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
