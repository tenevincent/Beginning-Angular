import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter,debounceTime,distinctUntilChanged } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chapter03';
  searchControl = new FormControl();

  constructor(){
    this.searchControl.valueChanges
      .pipe(filter(text => text.length >= 3), debounceTime(400),distinctUntilChanged())                
      .subscribe(value => {
        console.log(value);
    });
  }  

  
}
