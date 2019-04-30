import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './auth-guard.service';


//   {path: 'GitHub/user/:login/:score', component: GitHubUserComponent, canActivate: [AuthGuard]},
  // {path: 'login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuard]},
// 

export const routing = RouterModule.forRoot(
[
  {path: '', component: HomeComponent},
  {path: 'GitHub', component: GitHubComponent},

  {path: '**', component: NotFoundComponent}

]

);