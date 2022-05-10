import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-internships',
  templateUrl: './view-internships.component.html',
  styleUrls: ['./view-internships.component.css']
})
export class ViewInternshipsComponent implements OnInit {
internship:any[]=[];
  constructor(private route:ActivatedRoute,private userservice:UserService) { 
    this.route.queryParams.subscribe(data=>{
      // let i_id=parseInt(data['internshipID']);
      // this.internship=this.userservice.internship.map((val)=>{
      //   val.id==data['internshipID'];
      // })
      for(let i=0;i<this.userservice.internship.length;i++) {
        if(this.userservice.internship[i].id==data['internshipID']){
          this.internship.push(this.userservice.internship[i]);
        }
      }
      console.log(this.internship);
    })
  }

  ngOnInit(): void {
   
  }
}
