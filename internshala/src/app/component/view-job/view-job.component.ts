import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {
  desc:any="We are a technology company on a mission to equip students with relevant skills & practical exposure through internships and online training. Imagine a world full of freedom and possibilities. A worlwhere you can discover your passion and turn it into your career. A worldwhere your practical skills matter more than your university degree. A world where you do not have to wait till 21 to taste your first work experience (and get a rude shock that it is nothing like you had to imagine it to be). A world where you graduate fully assured, fully confident, and fully prepared to stake a claim on your place in the world.";
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
