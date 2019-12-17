import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


var config = {
  apiKey: "AIzaSyBrZNs7Q6p7Fxim5VEodhoWanCUC5gIvdE",
  authDomain: "angularfirebase-116ea.firebaseapp.com",
  databaseURL: "https://angularfirebase-116ea.firebaseio.com",
  projectId: "angularfirebase-116ea",
  storageBucket: "angularfirebase-116ea.appspot.com",
  messagingSenderId: "858874290748"
};



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    ReactiveFormsModule,     
    routing    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }