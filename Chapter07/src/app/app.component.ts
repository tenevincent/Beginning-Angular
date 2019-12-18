import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter,debounceTime,distinctUntilChanged } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chapter07';
  private searchControl : FormControl = new FormControl();
  constructor(){
    this.searchControl.valueChanges
    .pipe(filter(text => text.length >= 3), debounceTime(400),distinctUntilChanged())      
    .subscribe( value =>
      {
        console.log(value);
      }
      ) ;
  }

}
