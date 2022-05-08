import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {
  internship=this.userservice.internship
  constructor(private userservice:UserService) { }
  

  ngOnInit(): void {
  }

}
