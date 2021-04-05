import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit 
{
  user: any;
  repos: any;
  username: any;

  constructor(private githubService: GithubService) 
  {
    this.githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
  }

  search() 
  {
    this.githubService.updateUsername(this.username);

    this.githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    });
  }

  ngOnInit() {
  }

}
