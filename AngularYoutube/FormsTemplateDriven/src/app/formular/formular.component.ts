import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../user';
import{EnrollmentService} from '../enrollment-service';

@Component({
  selector: 'formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.css']
})
export class FormularComponent {

  title = 'app';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Vincent De Paul', 'vincent.tene@gmail.com', 5556665566, 'default', 'morning', true);
  topicHasError = true;
  submitted = false;
  errorMsg = '';

  
  constructor(private _enrollmentService: EnrollmentService) {}
 

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
  }

}
