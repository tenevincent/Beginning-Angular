import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'; 
import { GitHubService } from '../git-hub.service';
import { debounceTime, filter, distinctUntilChanged} from 'rxjs/operators'; 




@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.scss']
})
export class GitHubComponent implements OnInit {

  isLoading : boolean = true;
  users = [];
  searchControl = new FormControl();



  constructor(private githubService: GitHubService) { }

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

}
