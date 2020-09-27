import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { PasswordValidator } from '../password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;        

    constructor(fb: FormBuilder, private _loginService: LoginService, private _router: Router){        

        this.form = fb.group({
            username:['',Validators.required ],
            password:['',Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]            
        })
    }

    login(){        
        var result = this._loginService.login(this.form.controls['username'].value,this.form.controls['password'].value); 

        if(!result){
            this.form.controls['password'].setErrors({
                invalidLogin: true 
            });
        } 
        else{
            this._router.navigate(['GitHub']);
        }       
    }
}