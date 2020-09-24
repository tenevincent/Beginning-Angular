import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public  title = 'Component';
 public  name: string = 'Name from the parent component';
  
  public message : string = "";


}
