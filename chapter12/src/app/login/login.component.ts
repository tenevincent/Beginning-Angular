import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
import { PasswordValidator } from '../password-validator';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form: FormGroup;
  invalidLoginMessage;

  constructor(fb: FormBuilder, private _loginService: LoginService, private _route: ActivatedRoute) {

    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required,
      PasswordValidator.cannotContainSpace])]
    })
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.invalidLoginMessage = params["invalidLoginMessage"];
    });
  }

  login() {
    var result = this._loginService.login(this.form.controls['username'].value,
      this.form.controls['password'].value).then(
       err =>console.log(err)
      
        
      );
  }



}
