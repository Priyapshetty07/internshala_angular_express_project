import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
internship=this.userservice.jobs

  constructor(private userservice:UserService) {
   }
  
  ngOnInit(): void {
   
  }

}

