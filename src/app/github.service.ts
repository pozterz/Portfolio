import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Repos } from './repos';

@Injectable()
export class GithubService {

	private gitURL = 'https://api.github.com/users/pozterz/repos'

  constructor(private http: Http) { }

  getRepos(): Observable<Repos[]>  {
  	return this.http.get(this.gitURL)
  				.map((res:Response) => res.json())
  				.catch((error: any ) => Observable.throw(error.json().error || 'Server error'));
  }

}
