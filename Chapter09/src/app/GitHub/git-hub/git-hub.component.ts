import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import {GithubService } from '../github.service'; 
import { filter,debounceTime,distinctUntilChanged } from 'rxjs/operators';



@Component({
  selector: 'git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.scss']
})
export class GitHubComponent implements OnInit {

  isLoading = true;
  users = [];
  searchControl = new FormControl();


  constructor(private _githubService : GithubService) { }

  ngOnInit() {
    this.searchControl.valueChanges
        .pipe(filter(text => text.length >= 3), debounceTime(400),distinctUntilChanged())                
        .subscribe(value => {
          this.isLoading = true; 
          this._githubService.getGitHubData(value)
                .subscribe(data => {
                  this.isLoading = false;        
                  this.users = data.items;                    
          });                                  
    });       
  }

}
