import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ProductsComponent } from './products/products.component';
 
import { GitHubModule } from './GitHub/git-hub.module';
import { GithubService } from './GitHub/github.service';
 
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
import { LoginModule } from './Login/login.module';
import { MycomponentComponent } from './MyModule/mycomponent/mycomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ProductsComponent,
    MycomponentComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    routing,
    HttpClientModule,
    GitHubModule,
    LoginModule,
    ReactiveFormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
