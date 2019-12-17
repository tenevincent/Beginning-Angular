import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../user';

 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title: string;
  content: string;  

  usersCol: AngularFirestoreCollection<User>;  
  users: any;

  constructor(private firestore: AngularFirestore, private _router: Router){

  }

  ngOnInit(){
    this.usersCol = this.firestore.collection('users');    
    //this.users = this.usersCol.valueChanges();
    this.users = this.usersCol.snapshotChanges()
        .pipe(
            map(actions => {
                return actions.map( a => {
                    const data = a.payload.doc.data() as User;
                    const id = a.payload.doc.id;
                    return { id, data};
                });
            })
         ); 
  }

  add(){
    this._router.navigate(['add']);
  }  

  delete(userId,name){  
    if (confirm("Are you sure you want to delete " + name + "?")){      
        this.firestore.doc('users/'+userId).delete();  
    }                  
  }  

}
