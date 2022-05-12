import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {
  jobs: any[] = [];
  constructor(private route: ActivatedRoute, private userservice: UserService) {
    this.route.queryParams.subscribe(data => {
      for (let i = 0; i < this.userservice.jobs.length; i++) {
        if (this.userservice.jobs[i].id == data['internshipID']) {
          this.jobs.push(this.userservice.jobs[i]);
        }
      }
      console.log(this.jobs);
    })
  }
  ngOnInit(): void {
  }

}
