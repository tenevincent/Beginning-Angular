import { Component, OnInit } from '@angular/core';
import {User} from '../user';


import { from } from 'rxjs';
@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  countries = ['United States', 'Singapore',
  'Hong Kong', 'Australia'];
  model : User = new User('','','');

  constructor() { }


    
    submitted = false;
    
    onSubmit() { 
        this.submitted = true;                 
    }


  ngOnInit() {
  }

}
