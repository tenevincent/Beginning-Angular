import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthGuard } from './auth-guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path:'', component:UsersComponent, canActivate:[AuthGuard] },
  { path:'add',component:UserFormComponent, canActivate:[AuthGuard]}, 
  { path:'add/:id', component: UserFormComponent,canActivate:[AuthGuard] },
  { path:'login',component:LoginComponent },
  { path:'login/:invalidLoginMessage',component:LoginComponent },
  { path:'signup',component:SignupComponent },
  { path:'signup/:invalidLoginMessage',component:SignupComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
