import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PasswordValidator} from '../password-validator';
import {LoginService} from '../login.service';
import { from } from 'rxjs';




@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  form: FormGroup;        

  constructor(formbuilder: FormBuilder, private _loginService: LoginService){        

      this.form = formbuilder.group({
          username:['',Validators.required ],
    password:['',Validators.compose([Validators.required, 
PasswordValidator.cannotContainSpace])]            
      })
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


  ngOnInit() {
  }

}
