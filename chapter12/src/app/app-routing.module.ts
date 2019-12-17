import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  { path:'', component:UsersComponent },
  { path:'add',component:UserFormComponent },
  { path:'add/:id', component: UserFormComponent }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
