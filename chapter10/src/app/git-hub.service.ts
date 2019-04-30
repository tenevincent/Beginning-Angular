import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



export interface GitHubUser{
  html_url: string;
  avatar_url: string;
  login: string;
  score: string; 
  items: any;    
}

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private httpClient: HttpClient) { }


  getGitHubData(_searchTerm){
    return this.httpClient.get<GitHubUser>("https://api.github.com/search/users?q="+_searchTerm);          
}

}
