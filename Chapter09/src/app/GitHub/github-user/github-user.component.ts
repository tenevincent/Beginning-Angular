import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.scss']
})
export class GithubUserComponent implements OnInit, OnDestroy  {

  login;
  score;
  subscription;

 constructor(private _route: ActivatedRoute){
    }

  ngOnInit() {
  
    this.subscription = this._route.params.subscribe(params => {
      this.login = params["login"];
      this.score = params["score"];
  }); 
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
}

}
