import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductService} from './product.service';
import { from } from 'rxjs';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers :[ProductService]
})
export class AppRoutingModule { }
