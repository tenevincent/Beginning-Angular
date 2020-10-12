
import {NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';


const routes = [
    {
      path:'customers',
      loadChildren:'./customers.module#CustomersModule'
    },
    {
      path:'orders',
      loadChildren:'./orders.module#OrdersModule'
    },
    {
      path:'messages',
      loadChildren:'./messages.module#MessagesModule'
    },
    {
        path:'',
        loadChildren:'',
        pathMatch : 'full'
      }
  ];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export  class AppRoutingModule{

}