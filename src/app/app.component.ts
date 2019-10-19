import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'devfest-nbo';
  users = []

  constructor(private github:GithubService){
   
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.github.getUser().subscribe(users => {
      users = this.users
    })
  }


  
}
