import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import {PreventUnsavedChangesGuard} from './prevent-unsaved-changes-guard';
import {AuthGuardService} from './auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers:[LoginService, PreventUnsavedChangesGuard ,AuthGuardService]
})
export class LoginModule { }
