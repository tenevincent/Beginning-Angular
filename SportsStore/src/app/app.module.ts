import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store/store.module';
import { RouterModule } from '@angular/router';
import { routes } from './routing';
import { StoreFirstGuard } from './store-first-guard';
 
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,   
    RouterModule.forRoot(routes), 
    AppRoutingModule
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
