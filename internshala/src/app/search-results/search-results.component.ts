import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  jobs: any[] = [];
  internships: any[] = [];
  constructor(private route: ActivatedRoute, private userservice: UserService) {
    this.route.queryParams.subscribe(data => {
      if (Object.hasOwn(data, 'location') && Object.hasOwn(data, 'category')) {
        if (data['type'] == 'jobs') {
          this.jobs = this.userservice.jobs.filter((val) =>
            val.location === data['location'] && val.title == data['category']
          );
        } else if (data['type'] == "internship") {
          if (data['home']) {
            this.internships = this.userservice.internship.filter((val) =>
              val.type == "work from home"
            );
          } else if (data['office']) {
            this.internships = this.userservice.internship.filter((val) =>
              val.type == "work from office"
            );
          }
          this.internships = this.userservice.internship.filter((val) =>
            val.location === data['location'] && val.title == data['category']
          );
        }
      }
      else if (Object.hasOwn(data, 'location') && Object.hasOwn(data, 'menutype')) {
        if (data['type'] == "internship") {
          this.internships = this.userservice.internship.filter((val) =>
            (data['menutype'] == 'location') ? val.location === data['location'] : val.title === data['location']
          );
        } else if (data['type'] == "jobs") {
          this.jobs = this.userservice.jobs.filter((val) =>
            (data['menutype'] == 'location') ? val.location === data['location'] : val.title === data['location']
          );
        }
      } else if (Object.hasOwn(data, 'worktype') && Object.hasOwn(data, 'type')) {
        if (data['type'] == "internship") {
          if (data['worktype'] == "work from home") {
            this.internships = this.userservice.internship.filter((val) =>
              (data['worktype'] == val.type));
          }
        }
        else if (data['type'] == "jobs") {
          if (data['worktype'] == "work from home") {

          } else {

          }
        }
      }else if (Object.hasOwn(data, 'worktype') && Object.hasOwn(data, 'type')) {
        if (data['type'] == "jobs") {
          if (data['worktype'] == "work from home") {
            this.internships = this.userservice.internship.filter((val) =>
              (data['worktype'] == val.type));
          }
        }
        else if (data['type'] == "jobs") {
          if (data['worktype'] == "work from home") {

          } else {

          }
        }
      }

      else if (Object.hasOwn(data, 'location') && Object.hasOwn(data, 'type')) {
        if (data['type'] == "internship") {
          this.internships = this.userservice.internship.filter((val) =>
            (data['location'] == val.location));
        } else if (data['type'] == 'jobs') {
          this.jobs = this.userservice.jobs.filter(res =>
            (data['location'] == res.location)
          )
          console.log(this.jobs);
          console.log('')
        }
      }

      else if (Object.hasOwn(data, 'category') && Object.hasOwn(data, 'type')) {
        if (data['type'] == 'internship') {
          this.internships = this.userservice.internship.filter(res =>
            (data['category'] == res.title)
          )
        } else if (data['type'] == 'jobs') {
          this.jobs = this.userservice.jobs.filter(res =>
            (data['category'] == res.title)
          )
        }

      }

      console.log(this.jobs);
      console.log(this.internships)
    })
  }
  ngOnInit(): void {

  }

}
