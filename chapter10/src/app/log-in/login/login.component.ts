import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
 
import { PasswordValidator } from '../password-validator';
import { LoginService } from '../login-service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;        

    constructor(private router: Router, fb: FormBuilder, private _loginService: LoginService){        
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
          this.router.navigate(['GitHub']);
        }        
    }

  ngOnInit() {
  }

}
