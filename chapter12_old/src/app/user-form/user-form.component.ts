import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    id;
    form: FormGroup;  
    title: string;
    user = new User();    

    userDoc: AngularFirestoreDocument<User>;
    singleUser: Observable<User>;      

    constructor(fb: FormBuilder, private _router:Router, private _route:ActivatedRoute, private afs: AngularFirestore){        
        this.form = fb.group({
            username:['',Validators.required ],
            email:['',Validators.required]            
        })                
    }

    ngOnInit(){
        this._route.params.subscribe(params => {
            this.id = params["id"];            
        });      
                
        if(!this.id){
            this.title = "New User";            
        }
        else{
            this.title = "Edit User";                        
            this.userDoc = this.afs.doc('users/'+this.id);            
            this.singleUser = this.userDoc.valueChanges();
            this.singleUser.subscribe((user) =>{
                this.form.get('username').setValue(user.name);                
                this.form.get('email').setValue(user.email);                                
            });            
        }        
    }    

    submit(){                        
        if (this.id) {   
            this.afs.doc('users/'+this.id).update({
                name: this.user.name,	
                email: this.user.email  
            });   ;                                                       
        }
        else{            
            this.afs.collection('users').add({
                name: this.user.name,	
                email: this.user.email  
            });                         
        }
                                    
        this._router.navigate(['']);
    } 
}
