import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private loginService: LoginService, 
    private router:Router) { }

    canActivate(){
      if(this.loginService.isLoggedIn)
        return true;
  
      // imperative navigation
      this.router.navigate(['login'])
  
      return false;
    }


}
