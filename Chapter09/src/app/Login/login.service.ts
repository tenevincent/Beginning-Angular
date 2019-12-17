import { Injectable } from '@angular/core';


@Injectable()
export class LoginService {

  
  isLoggedIn : boolean = false;

  
  constructor() { }


  login(username : string, password: string){       
    if(username === "tene" && password === "123")
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
