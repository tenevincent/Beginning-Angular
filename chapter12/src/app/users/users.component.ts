import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { User } from 'firebase';




@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersCol : AngularFirestoreCollection<User>;
  users  : any;

  constructor(private afs : AngularFirestore) { }

  ngOnInit() {

    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();
  }

}
