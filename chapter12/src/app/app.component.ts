import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoggedIn: Observable<boolean>;

  constructor(private loginService: LoginService){    
  }

  ngOnInit(){
    this.loginService.getCurrentUser();
    this.isLoggedIn = this.loginService.isLoggedIn;        
  }

  onLogout(){
    this.loginService.logout();
  }


}
