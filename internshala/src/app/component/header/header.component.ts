import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  internship = [

    {
      category: "location", options: [

        { title: "Work from Home", link: "https://www.google.com" },

        { title: "Internship in Bangal", link: "https://www.google.com" },

        { title: "Internship in Delhi", link: "https://www.google.com" },

        { title: "Internship in Hydera", link: "https://www.google.com" },

        { title: "Internship in Mumbai", link: "https://www.google.com" },

        { title: "Internship in Chenna", link: "https://www.google.com" },

        { title: "Internship in Pune", link: "https://www.google.com" },

        { title: "Internship in Kolkat", link: "https://www.google.com" },

        { title: "Internship in Jaipur", link: "https://www.google.com" },

        { title: "International Intern", link: "https://www.google.com" },

        { title: "View all internships", link: "https://www.google.com" }

      ]

    },

    {
      category: "profile", options: [

        { title: "Computer Science Internship", link: "https://www.google.com" },

        { title: "Marketing Internship", link: "https://www.google.com" },

        { title: "Finance Internship", link: "https://www.google.com" },

        { title: "Graphic Design Internship", link: "https://www.google.com" },

        { title: "Architecture Internship", link: "https://www.google.com" },

        { title: "Mechanical Internship", link: "https://www.google.com" },

        { title: "HR Internship", link: "https://www.google.com" },

        { title: "Digital Marketing Internship", link: "https://www.google.com" },

        { title: "Law Internship", link: "https://www.google.com" },

        { title: "International Intern", link: "https://www.google.com" },

        { title: "View all internships", link: "https://www.google.com" }

      ]

    },

    { category: "category", options: [{ title: "Work from Home", link: "https://www.google.com" }] },

    {
      category: "specializations", options: [{ title: "Digital Marketing Specialization", link: "" },

      { title: "Human Resource Management Specialization", link: "#" },

      { title: "Data Science Specialization", link: "#" }]
    }

  ]
  onlineTrainings=[
    "Web Development",
    "Digital Marketing",
    "Machine Learning",
    "Advanced Excel",
    "AutoCAD",
    "Ethical Hacking"
  ]

  jobs = [

    {
      category: "location", options: [

        { title: "Work from Home", link: "https://www.google.com" },

        { title: "Internship in Bangal", link: "https://www.google.com" },

        { title: "Internship in Delhi", link: "https://www.google.com" },

        { title: "Internship in Hydera", link: "https://www.google.com" },

        { title: "Internship in Mumbai", link: "https://www.google.com" },

        { title: "Internship in Chenna", link: "https://www.google.com" },

        { title: "Internship in Pune", link: "https://www.google.com" },

        { title: "Internship in Kolkat", link: "https://www.google.com" },

        { title: "Internship in Jaipur", link: "https://www.google.com" },

        { title: "International Intern", link: "https://www.google.com" },

        { title: "View all internships", link: "https://www.google.com" }

      ]

    },

    {
      category: "category", options: [

        { title: "Marketing Job", link: "https://www.google.com" },

        { title: "Finance Job", link: "https://www.google.com" },

        { title: "Graphic Design Job", link: "https://www.google.com" },

        { title: "Architecture Job", link: "https://www.google.com" },

        { title: "Mechanical Job", link: "https://www.google.com" },

        { title: "HR Job", link: "https://www.google.com" },

        { title: "Digital Marketing Job", link: "https://www.google.com" },

        { title: "Law Job", link: "https://www.google.com" },

        { title: "International Job", link: "https://www.google.com" },

        { title: "View all Job", link: "https://www.google.com" }

      ]

    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
