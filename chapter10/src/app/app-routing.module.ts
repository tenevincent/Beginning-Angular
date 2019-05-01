 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitHubUserComponent } from './git-hub/git-hub-user/git-hub-user.component';
import { AuthGuard } from './log-in/authorize-guard';
import { PreventUnsavedChangesGuard } from './log-in/prevent-unsaved-changes-guard';
import { LoginComponent } from './log-in/login/login.component';
import { GitHubComponent } from './git-hub/git-hub-component/git-hub-component.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routing = RouterModule.forRoot(
  [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'GitHub', component: GitHubComponent, canActivate:[AuthGuard]},
    {path : 'GitHub/user/:login/:score', component:GitHubUserComponent, canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuard]},

    {path: '**', component: NotFoundComponent}  
  ]
  
  );
