import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
  // onlineTrainings = [
  //   "Web Development",
  //   "Java",
  //   "API",
  //   "Digital Marketing",
  //   "Machine Learning",
  //   "Advanced Excel",
  //   "AutoCAD",
  //   "Ethical Hacking"
  // ]

  jobs = [
    {
      category: "Location", options: [

        { title: "Jobs in Delhi", link: "Delhi" },

        { title: "Jobs in Mumbai", link: "Mumbai" },

        { title: "Jobs in Bangalore", link: "Bangalore" },

        { title: "Jobs in Hyderabad", link: "Hyderabad" },

        { title: "Jobs in Kolkata", link: "Kolkata" },

        { title: "Jobs in Chennai", link: "Chennai" },

        { title: "Jobs in Pune", link: "Pune" },

        { title: "Jobs in Jaipur", link: "Jaipur" }

      ]

    },

    {
      category: "Category", options: [

        { title: "Marketing Job", link: "" },

        { title: "Finance Job", link: "" },

        { title: "Graphic Design Job", link: "" },

        { title: "Architecture Job", link: "" },

        { title: "Fresher jobs", link: "" },

        { title: "HR Job", link: "" },

        { title: "Digital Marketing Job", link: "" },

        { title: "Law Job", link: "" },

        { title: "Computer science jobs", link: "" },

        { title: "View all Job", link: "" }

      ]

    }
  ]

  constructor(public dialog: MatDialog,private router:Router) { }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.router.navigate(['/about-us']);
      }
    });
  }


  ngOnInit(): void {

  }

}
