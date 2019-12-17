import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chapter12';
  constructor(private afs : AngularFirestore){
    console.log( "this is the angular firebase: " + afs);

    console.log(afs);
  }
}
