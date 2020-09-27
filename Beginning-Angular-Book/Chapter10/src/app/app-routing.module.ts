import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitHubComponent } from './github/github.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
 import {AuthGuardService} from './auth-guard.service'
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'GitHub', component: GitHubComponent, canActivate: [AuthGuardService]},
  {path: 'GitHub/user/:login/:score', component: GitHubComponent, canActivate: [AuthGuardService], canDeactivate:[PreventUnsavedChangesGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
]);
