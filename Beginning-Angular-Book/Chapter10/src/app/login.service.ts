import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  login(username, password){       
    if(username === "tene" && password === "123oao")
        this.isLoggedIn = true; 
    else
        this.isLoggedIn = false;

    return this.isLoggedIn;
  }

  logout(){
      this.isLoggedIn = false;
      return this.isLoggedIn;
  }  

}