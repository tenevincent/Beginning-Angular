import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';


export interface GitHubUser{
  html_url: string;
  avatar_url: string;
  login: string;
  score: string;
  items: any   ;        
}



@Injectable({
  providedIn: 'root'
})
export class GitHubService{
  constructor(private _http: HttpClient){

  }

  getGitHubData(_searchTerm):Observable<GitHubUser>{
    return this._http.get<GitHubUser>
("https://api.github.com/search/users?q="+_searchTerm);                    
  }
}