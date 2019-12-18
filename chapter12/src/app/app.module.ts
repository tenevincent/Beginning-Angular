import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { config } from 'rxjs';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth-guard';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBrZNs7Q6p7Fxim5VEodhoWanCUC5gIvdE",
  authDomain: "angularfirebase-116ea.firebaseapp.com",
  databaseURL: "https://angularfirebase-116ea.firebaseio.com",
  projectId: "angularfirebase-116ea",
  storageBucket: "angularfirebase-116ea.appspot.com",
  messagingSenderId: "858874290748",
  appId: "1:858874290748:web:1b9af78930aa1f14"
};


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserFormComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
