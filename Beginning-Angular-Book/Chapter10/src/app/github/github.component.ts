import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {GitHubService} from '../git-hub.service';
import { filter,debounceTime,distinctUntilChanged } from 'rxjs/operators';
 

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GitHubComponent implements OnInit {
  searchControl = new FormControl();  
  isLoading = false;
  users = [];  

  constructor(private _githubService: GitHubService){
  }

  ngOnInit() {
    this.searchControl.valueChanges
        .pipe(filter(text => text.length >= 3), debounceTime(400),distinctUntilChanged())                
        .subscribe(value => {
          this.isLoading = true; 
          this._githubService.getGitHubData(value)
                .subscribe(data => {
                  this.isLoading = false; 
                 this.users = data.items;
          }
          );                                  
    });          
  }
}  