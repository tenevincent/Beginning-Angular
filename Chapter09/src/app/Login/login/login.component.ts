import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { PasswordValidator } from '../password-validator';
 
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;

    constructor(private _router: Router, fb: FormBuilder, private _loginService: LoginService) {

        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpace])]
        })
    }

    ngOnInit() {
    }

    

    login() {
        var result = this._loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);

        if (!result) {
            this.form.controls['password'].setErrors({
                invalidLogin: true
            });
        }
        else if(result) {
            this._router.navigate(['GitHub']);
        }
        else{
            this._router.navigate(['']); 
        }
    }

}
