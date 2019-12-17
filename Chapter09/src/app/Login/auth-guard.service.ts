import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService {

  constructor(private _loginService: LoginService,
    private _router: Router) {
  }

  canActivate() {
    if (this._loginService.isLoggedIn)
      return true;

    // imperative navigation
    this._router.navigate(['login'])

    return false;
  }
}
