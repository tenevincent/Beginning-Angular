import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store/store.module';
import { RouterModule } from '@angular/router';
import { routes } from './routing';
import { StoreFirstGuard } from './store-first-guard';
import { ProductTableComponent } from './admin/product-table/product-table.component';
import { ProductEditorComponent } from './admin/product-editor/product-editor.component';
import { OrderTableComponent } from './admin/order-table/order-table.component';
import { ModelModule } from './model/model.module';
import { AdminModule } from './admin/admin/admin.module';
 
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,   
    ModelModule,
    AdminModule,
    RouterModule.forRoot(routes), 
    AppRoutingModule
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
