import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubUserComponent } from './github-user/github-user.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    GitHubComponent,
    GithubUserComponent 

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers : []
})
export class GitHubModule { }
