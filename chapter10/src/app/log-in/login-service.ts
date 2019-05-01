import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordValidator } from './password-validator';
import { Component } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;

  login(username, password){       
    if(username === "jason" && password === "123")
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