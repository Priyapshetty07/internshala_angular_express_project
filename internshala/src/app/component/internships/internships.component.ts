import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {

  constructor() { }
  internship = [
    {
      title: "Backend Development",
      sub: "THIS",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$7000/month",
      location: "Banglore",
      apply: "ASAP",
      link: "#",
      type: "work from home"
    },

    {
      title: "Java Development",
      sub: "ORACLE",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$8000/month",
      location: "Kolkata",
      apply: "ASAP",
      link: "https://google.com",
      type: "Work from office"
    },

    {
      title: "Media",
      sub: "TCS",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$5000/month",
      location: "Delhi",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "CAD Design",
      sub: "INFOSY",
      startdate: "Immediately",
      duration: "7-months",
      stipend: "$7800/month",
      location: "Chennai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "NGO",
      sub: "WIPRO",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$3000/month",
      location: "Hyderabad",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "Medicine",
      sub: "TECH MEHINDRA",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$7000/month",
      location: "Mumbai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },

    {
      title: "Front End Development",
      sub: "CAPGEMINI",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$3500/month",
      location: "Banglore",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "NGO",
      sub: "COGNIZANT",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$3500/month",
      location: "Mumabi",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },


    {
      title: "Backend Development",
      sub: "HP",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$10000/month",
      location: "Kolkata",
      apply: "ASAP",
      link: "#",
      type: "Work from office"
    },

    {
      title: "MBA",
      sub: "WIPRO",
      startdate: "Immediately",
      duration: "9-months",
      stipend: "$10000/month",
      location: "Mumbai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "Front End Development",
      sub: "ACCENTURE",
      startdate: "Immediately",
      duration: "5-months",
      stipend: "$5500/month",
      location: "Kolkata",
      apply: "ASAP",
      link: "https://google.com",
      type: "Work from home"
    },

    {
      title: "Media",
      sub: "TECH MEHINDRA",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$9000/month",
      location: "Chennai",
      apply: "ASAP",
      link: "https://google.com",
      type: "Work from office"
    },

    {
      title: "Front End Development",
      sub: "THIS",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$9000/month",
      location: "Delhi",
      apply: "ASAP",
      link: "https://google.com",
      type: "Work from home"
    },



    {
      title: "Java Development",
      sub: "HP",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$8000/month",
      location: "Banglore",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },

    {
      title: "MBA",
      sub: "IBM",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$4500/month",
      location: "Kolkata",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "CAD Design",
      sub: "THBS",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$5800/month",
      location: "Mumbai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "NGO",
      sub: "CAPGEMIN",
      startdate: "Immediately",
      duration: "7-months",
      stipend: "$9000/month",
      location: "Chennai",
      apply: "ASAP",
      link: "https://google.com",
      type: "Work from office"
    },


    {
      title: "Backend Development",
      sub: "WIPRO",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$8000/month",
      location: "Delhi",
      apply: "ASAP",
      link: "#",
      type: "work from home"
    },

    {
      title: "Front End Development",
      sub: "SUN MOBILITY",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$3500/month",
      location: "Mumbai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },



    {
      title: "Java Development",
      sub: "INFOSY",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$8000/month",
      location: "Delhi",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },


    {
      title: "Humanities",
      sub: "THIS",
      startdate: "Immediately",
      duration: "7-months",
      stipend: "$7000/month",
      location: "Mumbai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },



    {
      title: "Front End Development",
      sub: "COGNIZANT",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$3500/month",
      location: "Hyderabad",
      apply: "ASAP",
      link: "https://google.com",
      type: "Work from office"
    },

    {
      title: "Java Development",
      sub: "IBM",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$8000/month",
      location: "Chennai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },


    {
      title: "CAD Design",
      sub: "HCL",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$5800/month",
      location: "Banglore",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "Front End Development",
      sub: "TCS",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$3500/month",
      location: "Chennai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },


    {
      title: "Backend Development",
      sub: "TCS",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$4000/month",
      location: "Mumbai",
      apply: "ASAP",
      link: "#",
      type: "work from office"
    },

    {
      title: "CAD Design",
      sub: "TCS",
      startdate: "Immediately",
      duration: "9-months",
      stipend: "$9000/month",
      location: "Kolkata",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "Java Development",
      sub: "WIPRO",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$3000/month",
      location: "Mumbai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },

    {
      title: "Media",
      sub: "THIS",
      startdate: "Immediately",
      duration: "9-months",
      stipend: "$10000/month",
      location: "Mumbai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },


    {
      title: "CAD Design",
      sub: "IBM",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$5800/month",
      location: "Delhi",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },


    {
      title: "Java Development",
      sub: "TECH MAHINDRA ",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$8000/month",
      location: "Hyderabad",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },




    {
      title: "CAD Design",
      sub: "ORACLE",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$9800/month",
      location: "Hyderabad",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "MBA",
      sub: "DQS INDIA",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$4500/month",
      location: "Banglore",
      apply: "ASAP",
      link: "https://google.com", 
      type: "work from office"
    },



    {
      title: "Medicine",
      sub: "THBS",
      startdate: "Immediately",
      duration: "2-months",
      stipend: "$6000/month",
      location: "Kolkata",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },

    {
      title: "MBA",
      sub: "ORACLE",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$4500/month",
      location: "Chennai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },



    {
      title: "Medicine",
      sub: "CAPGEMIN",
      startdate: "Immediately",
      duration: "11-months",
      stipend: "$6000/month",
      location: "Banglore",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "Backend Development",
      sub: "IBM",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$6000/month",
      location: "Chennai",
      apply: "ASAP",
      link: "#",
      type: "work from home"
    },



    {
      title: "Medicine",
      sub: "HCL",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$6000/month",
      location: "Delhi",
      apply: "ASAP",
      link: "https://google.com",
      type: "Work from office"
    },

    {
      title: "NGO",
      sub: "TCS",
      startdate: "Kolkata",
      duration: "8-months",
      stipend: "$7000/month",
      location: "Banglore",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },

    {
      title: "MBA",
      sub: "ACCENTURE",
      startdate: "Immediately",
      duration: "9-months",
      stipend: "$5500/month",
      location: "Delhi",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },



    {
      title: "Medicine",
      sub: "TCS",
      startdate: "Immediately",
      duration: "11-months",
      stipend: "$6000/month",
      location: "Chennai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },



    {
      title: "NGO",
      sub: "EUPRIME",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$9000/month",
      location: "Banglore",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "Medicine",
      sub: "HP",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$7000/month",
      location: "Hyderabad",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "Humanities",
      sub: "TCS",
      startdate: "Immediately",
      duration: "9-months",
      stipend: "$10000/month",
      location: "Chennai",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "NGO",
      sub: "INFOSYS",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$8000/month",
      location: "Banglore",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "MBA",
      sub: "COGNIZANT",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$8500/month",
      location: "Hyderabad",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },



    {
      title: "NGO",
      sub: "THBS",
      startdate: "Immediately",
      duration: "10-months",
      stipend: "$8000/month",
      location: "Delhi",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "Humanities",
      sub: "CAPGEMINI",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$5000/month",
      location: "Delhi",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    },


    {
      title: "Media",
      sub: "WIPRO",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$7000/month",
      location: "Kolkata",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },



    {
      title: "Humanities",
      sub: "MAGAMONEY CARTS PRIVATE LIMITED",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$6000/month",
      location: "Banglore",
      apply: "ASAP",
      link: "https://google.com",
      type: "Work from office"
    },

    {
      title: "Media",
      sub: "COGNIZANT",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$8000/month",
      location: "Hyderabad",
      apply: "ASAP",
      link: "https://google.com",
      type: "Work from office"
    },

    {
      title: "Humanities",
      sub: "HEXAWARE",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$4000/month",
      location: "Kolkata",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from home"
    },

    {
      title: "Backend Development",
      sub: "ORACLE",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$5000/month",
      location: "Hyderabad",
      apply: "ASAP",
      link: "#",
      type: "work from home"
    },



    {
      title: "Humanities",
      sub: "ORACLE",
      startdate: "Immediately",
      duration: "2-months",
      stipend: "$5000/month",
      location: "Hyderabad",
      apply: "ASAP",
      link: "https://google.com",
      type: "work from office"
    }

  ]

  ngOnInit(): void {
  }

}
