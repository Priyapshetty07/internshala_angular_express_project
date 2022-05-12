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
        } else if("jobs") {
          this.jobs=this.userservice.jobs.filter((val)=>
            (data['menutype']=='location')?val.location===data['location']:val.title===data['location']
          );
        }
      } else if(Object.hasOwn(data,'worktype') && Object.hasOwn(data,'type')){
        if(data['type']=="internship") {
          if(data['worktype']=="work from home"){
            this.internships=this.userservice.internship.filter((val)=>
            (data['worktype']==val.type));
          } else {

          }
        } else if(data['type']=="jobs") {
          if(data['worktype']=="work from home"){

          } else {

          }
        }
      }
      console.log(this.jobs);
      console.log(this.internships)
    })
   }
  ngOnInit(): void {
    
  }

}
