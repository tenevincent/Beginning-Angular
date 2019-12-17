import { CanDeactivate } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export class PreventUnsavedChangesGuard implements CanDeactivate<LoginComponent> {
  
   
    canDeactivate(component: LoginComponent){
        if(component.form.dirty)
          return confirm("Are you sure you want to leave the login view?");
        
        return true;
      }

    
}
