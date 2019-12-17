import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-git-hub-user',
  templateUrl: './git-hub-user.component.html',
  styleUrls: ['./git-hub-user.component.scss']
})
export class GitHubUserComponent implements OnInit {

  login;
  score;
  subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.login = params["login"];
      this.score = params["score"];
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
