import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubUserComponent } from './git-hub-user/git-hub-user.component';
import { GitHubComponent } from './git-hub-component/git-hub-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    GitHubUserComponent,  
    GitHubComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,  
    HttpClientModule,
    RouterModule   
  ]
})
export class GitHubModule { }
