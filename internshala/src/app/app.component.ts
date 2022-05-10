import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'internshala';


showHead: boolean = false;

  constructor(private router: Router,private userservice:UserService) {

    router.events.forEach((event) => {

      if (event instanceof NavigationStart) {

        if (event['url'] == '/about-us') {

          this.showHead = false;

        } else {

          this.showHead = true;

        }

      }

    });

  }

  ngOnInit(): void {
    // localStorage.setItem('username','');
    // localStorage.setItem('login','false')
  }
}
