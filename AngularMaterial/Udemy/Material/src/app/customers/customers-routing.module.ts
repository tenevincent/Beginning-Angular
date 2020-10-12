import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerListComponent} from './customer-list/customer-list.component';



const routes: Routes = [
  {
    path:'',
    component: CustomerListComponent
  },
  {
    path:'info',
    component: CustomerCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
