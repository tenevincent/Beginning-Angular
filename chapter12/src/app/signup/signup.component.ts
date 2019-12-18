import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
import { PasswordValidator } from '../password-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


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

  onSignup() {
    var result = this._loginService.signup(this.form.controls['username'].value, this.form.controls['password'].value);
  }
}
