import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GitHubComponent} from './GitHub/git-hub/git-hub.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductsComponent} from './products/products.component';
import {GithubUserComponent } from './GitHub/github-user/github-user.component';
import { LoginComponent } from './Login/login/login.component';
import {AuthGuardService} from './Login/auth-guard.service';
import { PreventUnsavedChangesGuard } from './Login/prevent-unsaved-changes-guard';



const routes: Routes = [
  {path : '', component : HomeComponent, pathMatch:'full'},
  {path : 'Products', component : ProductsComponent},
  {path : 'GitHub', component : GitHubComponent},
  {path: "GitHub/user/:login/:score", component : GithubUserComponent, canActivate : [AuthGuardService] },
  {path: 'login', component: LoginComponent, canDeactivate:[PreventUnsavedChangesGuard]},
  {path : '**', component : NotFoundComponent}
  
];


export const routing = RouterModule.forRoot(routes);





@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
