import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { RatingComponent } from './rating/rating.component';
import { StarComponent } from './star/star.component';
import { StarFillComponent } from './start-fill/start-fill.component';
import { ProductComponent } from './product/product.component';
import { TruncatePipe } from './truncate.pipe';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    StarComponent,
    StarFillComponent,
    ProductComponent,
    TruncatePipe,
    JumbotronComponent,
    UserFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
