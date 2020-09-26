import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GithubService } from './github.service'; 
import { filter,debounceTime,distinctUntilChanged } from 'rxjs/operators';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  searchControl = new FormControl();  
  isLoading = false;

  users = [];  

  constructor(private _githubService: GithubService){
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
          });                                  
    });          
  }
}  
