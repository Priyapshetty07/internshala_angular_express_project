import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../services/user.service';

interface jobs {
  location:string;
}
interface internship { 
    category:string;
     location:string
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
jobs:any[]=[];
internships:any[]=[];
  constructor(private route:ActivatedRoute,private userservice:UserService) {
    this.route.queryParams.subscribe(data=>{
      if(Object.hasOwn(data, 'location') && Object.hasOwn(data, 'category')) {
        if(data['type']=='jobs') {
          this.jobs=this.userservice.jobs.filter((val)=>
          val.location===data['location'] && val.title==data['category']
        );
        } else if(data['type']=="internship") {
          this.internships=this.userservice.internship.filter((val)=>
          val.location===data['location'] && val.title==data['category']
        );
        }
      } else if(Object.hasOwn(data, 'location') && Object.hasOwn(data, 'menutype')){
        if(data['type']=="internship") {
          this.internships=this.userservice.internship.filter((val)=>
            (data['menutype']=='location')?val.location===data['location']:val.title===data['location']
          );
          // if(data['menutype']=="location") {
          //   this.internships=this.userservice.internship.filter((val)=>
          //   val.location===data['location']
          // );
          // } else if(data['menutype']=='category') {
          //   this.internships=this.userservice.internship.filter((val)=>
          //   val.title==data['category']
          // );
          // }
        } else if("jobs") {
          this.jobs=this.userservice.jobs.filter((val)=>
            (data['menutype']=='location')?val.location===data['location']:val.title===data['location']
          );
        }
      } 
      // else {
      //   this.jobs=this.userservice.jobs.filter((val)=>
      //   val.location===data['location']
      // );
      // }
      
      console.log(this.jobs);
      console.log(this.internships)
    })
   }

  ngOnInit(): void {
    
  }

}
