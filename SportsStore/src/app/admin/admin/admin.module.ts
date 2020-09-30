import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../auth-guard';
import { OrderTableComponent } from '../order-table/order-table.component';
import { ProductEditorComponent } from '../product-editor/product-editor.component';
import { ProductTableComponent } from '../product-table/product-table.component';



let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  {
      path: "main", component: AdminComponent, canActivate: [AuthGuard],
      children: [
          { path: "products/:mode/:id", component: ProductEditorComponent },
          { path: "products/:mode", component: ProductEditorComponent },
          { path: "products", component: ProductTableComponent },
          { path: "orders", component: OrderTableComponent },
          { path: "**", redirectTo: "products" }
      ]
  },
  { path: "**", redirectTo: "auth" }
]);



@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AuthComponent, ProductEditorComponent, ProductTableComponent, OrderTableComponent, AdminComponent],
  providers: [AuthGuard],

})
export class AdminModule {    }
