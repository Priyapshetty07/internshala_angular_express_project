import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { DeleteuserComponent } from '../deleteuser/deleteuser.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username:any=''
islogin:boolean=false;
  internship = [
  {
    category: "Location", options: [
      { title: "Internship in Bengaluru", link: "Bangalore" },
      { title: "Internship in Kolkata", link: "Kolkata" },
      { title: "Internship in Delhi", link: "Delhi" },
      { title: "Internship in Mumbai", link: "Mumbai" },
      { title: "Internship in Chennai", link: "Chennai" },
      { title: "Internship in Hyderabad", link: "Hyderabad" }
    ]
  },
  {
    category: "Category", options: [
      { title: "Backend Development", link: "" },
      { title: "Front End Development", link: '' },
      { title: "Java Development", link: '' },
      { title: "Humanities", link: '' },
      { title: "CAD Design", link: '' },
      { title: "MBA", link: '' },
      { title: "Medicine", link:''},
      { title: "NGO", link: ''},
      { title: "Media", link:''},

    ]
  },

    // {
    //   category: "Specializations", options: [
    //     { title: "Digital Marketing Specialization", link: "" },

    //     { title: "Human Resource Management Specialization", link: "#" },

    //     { title: "Data Science Specialization", link: "#" }]
    // }

  ]
  
  jobs = [
    {
      category: "Location", options: [

        { title: "Jobs in Delhi", link: "Delhi" },

        { title: "Jobs in Mumbai", link: "Mumbai" },

        { title: "Jobs in Bangalore", link: "Bangalore" },

        { title: "Jobs in Hyderabad", link: "Hyderabad" },

        { title: "Jobs in Kolkata", link: "Kolkata" },

        { title: "Jobs in Chennai", link: "Chennai" }

      ]

    },

    

    {
      category: "Category", options: [
        { title: "Backend Development", link: "" },
        { title: "Front End Development", link: '' },
        { title: "Java Development", link: '' },
        { title: "Humanities", link: '' },
        { title: "CAD Design", link: '' },
        { title: "MBA", link: '' },
        { title: "Medicine", link:''},
        { title: "NGO", link: ''},
        { title: "Media", link:''},
  
      ]
    }
  ]

  constructor(public dialog: MatDialog,private router:Router,private userservice:UserService) { }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result=='success') {
        // this.router.navigate(['/']);
        window.location.reload()
        
      }
    });
  }
  openDialogDA() {
    const dialogRef = this.dialog.open(DeleteuserComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result=='success') {
        // this.router.navigate(['/']);
        window.location.reload()
        
      }
    });
  }
  logout(){
    this.username='';
    this.islogin=false;
    localStorage.removeItem('username');
    localStorage.removeItem('login');
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    if(localStorage.getItem('username')){
      this.username=localStorage.getItem('username');
    }
    if(localStorage.getItem('login')) {
      if(localStorage.getItem('login')=='true'){
        this.islogin=true;
      };
    }
  }

}
