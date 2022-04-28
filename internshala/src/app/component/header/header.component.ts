import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  internship = [

    {
      category: "Location", options: [

        { title: "Work from Home", link: "https://www.google.com" },

        { title: "Internship in Bangalore", link: "https://www.google.com" },

        { title: "Internship in Delhi", link: "https://www.google.com" },

        { title: "Internship in Hyderabad", link: "https://www.google.com" },

        { title: "Internship in Mumbai", link: "https://www.google.com" },

        { title: "Internship in Chennai", link: "https://www.google.com" },

        { title: "Internship in Pune", link: "https://www.google.com" },

        { title: "Internship in Kolkata", link: "https://www.google.com" },

        { title: "Internship in Jaipur", link: "https://www.google.com" },

        { title: "International Internship", link: "https://www.google.com" },

        { title: "View all internships", link: "https://www.google.com" }

      ]

    },

    {
      category: "Profile", options: [

        { title: "Computer Science Internship", link: "https://www.google.com" },

        { title: "Marketing Internship", link: "https://www.google.com" },

        { title: "Finance Internship", link: "https://www.google.com" },

        { title: "Graphic Design Internship", link: "https://www.google.com" },

        { title: "Architecture Internship", link: "https://www.google.com" },

        { title: "Mechanical Internship", link: "https://www.google.com" },

        { title: "HR Internship", link: "https://www.google.com" },

        { title: "Digital Marketing Internship", link: "https://www.google.com" },

        { title: "Law Internship", link: "https://www.google.com" },

        { title: "Electrinics Internship", link: "https://www.google.com" },

        { title: "Content Writing Internship", link: "https://www.google.com" },

        { title: "Civil Internship", link: "https://www.google.com" },

        { title: "Campus Ambassador Program", link: "https://www.google.com" },

        { title: "View all internships", link: "https://www.google.com" }

      ]

    },

    {
      category: "Category", options: [
        { title: "Engineering Intership", link: "https://www.google.com" },
        { title: "MBA Internship", link: "https://www.google.com" },
        { title: "Part-Time Jobs/Internship", link: "https://www.google.com" },
        { title: "Humanities Intership", link: "https://www.google.com" },
        { title: "Science Intership", link: "https://www.google.com" },
        { title: "Interships with job Offer", link: "https://www.google.com" },
        { title: "Internships for Women", link: "https://www.google.com" },
        { title: "View all internships", link: "https://www.google.com" },

      ]
    },

    {
      category: "Specializations", options: [
        { title: "Digital Marketing Specialization", link: "" },

        { title: "Human Resource Management Specialization", link: "#" },

        { title: "Data Science Specialization", link: "#" }]
    }

  ]
  onlineTrainings = [
    "Web Development",
    "Java",
    "API",
    "Digital Marketing",
    "Machine Learning",
    "Advanced Excel",
    "AutoCAD",
    "Ethical Hacking"
  ]

  jobs = [

    {
      category: "Location", options: [

        { title: "Work from Home", link: "https://www.google.com" },

        { title: "Jobs in Delhi", link: "https://www.google.com" },

        { title: "Jobs in Mumbai", link: "https://www.google.com" },

        { title: "Jobs in Bangalore", link: "https://www.google.com" },

        { title: "Jobs in Hyderabad", link: "https://www.google.com" },

        { title: "Jobs in Kolkata", link: "https://www.google.com" },

        { title: "Jobs in Chennai", link: "https://www.google.com" },

        { title: "Jobs in Pune", link: "https://www.google.com" },

        { title: "Jobs in Jaipur", link: "https://www.google.com" },

        { title: "View all jobs", link: "https://www.google.com" }

      ]

    },

    {
      category: "Category", options: [

        { title: "Marketing Job", link: "https://www.google.com" },

        { title: "Finance Job", link: "https://www.google.com" },

        { title: "Graphic Design Job", link: "https://www.google.com" },

        { title: "Architecture Job", link: "https://www.google.com" },

        { title: "Fresher jobs", link: "https://www.google.com" },

        { title: "HR Job", link: "https://www.google.com" },

        { title: "Digital Marketing Job", link: "https://www.google.com" },

        { title: "Law Job", link: "https://www.google.com" },

        { title: "Computer science jobs", link: "https://www.google.com" },

        { title: "View all Job", link: "https://www.google.com" }

      ]

    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
