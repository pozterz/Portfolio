import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GithubService } from '../github.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {

  constructor(private githubService:GithubService) { }

  repos: Repos[];
  title = "Github Repositories"

  private loadRepos(): void {
  	this.githubService.getRepos()
  		.subscribe(
  			repos => {
  				this.repos = repos
  			}
  		)
  }

  ngOnInit() {
  	this.loadRepos();
  }

}
