import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PasswordValidator } from '../password-validator';
import { LoginService } from '../login.service';

@Component({
    selector:'login-form',
    templateUrl: 'login.component.html'
})
export class LoginComponent  {

    form: FormGroup;        

    constructor(formBuilder: FormBuilder, private _loginService: LoginService){        

        this.form = formBuilder.group({
            username:['',Validators.required ],
      password:['',Validators.compose([Validators.required,  PasswordValidator.cannotContainSpace])]            
        });

    }

    login(){        

        var result = this._loginService.login(this.form.controls['username'].value,
        this.form.controls['password'].value); 

        if(!result){
            this.form.controls['password'].setErrors({
                invalidLogin: true 
            });
        }        
    }
}