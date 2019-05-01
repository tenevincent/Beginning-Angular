import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GitHubService, GitHubUser } from '../git-hub.service';
import { debounceTime, filter, distinctUntilChanged} from 'rxjs/operators'; 
import { Router } from '@angular/router';



@Component({
  selector: 'app-git-hub-component',
  templateUrl: './git-hub-component.component.html',
  styleUrls: ['./git-hub-component.component.scss']
})
export class GitHubComponent implements OnInit {

  isLoading = true;
  users = [];
  searchControl = new FormControl();

  constructor(private router: Router, private githubService: GitHubService){
  }

  ngOnInit() {
    this.searchControl.valueChanges
        .pipe(filter(text => text.length >= 3), debounceTime(400),distinctUntilChanged())                
        .subscribe(value => {
          this.isLoading = true; 
          this.githubService.getGitHubData(value)
                .subscribe(data => {
                  this.isLoading = false;        
                  this.users = data.items;                    
          });                                  
    });                   
  } 

  onClick(user : GitHubUser){

    // this.router.navigate(['']);
    // console.log("current URL: " + this.route.toString())
     this.router.navigate(['/GitHub/user/', user.login, user.score]);
 
    // this.router.navigate([user.login, user.score], { relativeTo: this.route });
 
   }
   

}
