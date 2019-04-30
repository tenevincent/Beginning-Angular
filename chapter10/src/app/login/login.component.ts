import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { PasswordValidator } from '../password-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;        
  
  constructor(fb: FormBuilder, private _loginService: LoginService) {
    this.form = fb.group({
      username:['',Validators.required ],
      password:['',Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]            
  })

   }

  ngOnInit() {
  }

}
