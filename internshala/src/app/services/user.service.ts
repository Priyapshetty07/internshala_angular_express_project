import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private myhttp:HttpClient) { }
  getProfile(){
    return this.myhttp.get('http://localhost:4200/api/users')
  }
  registerDetails(data:any){
    return this.myhttp.post('http://localhost:4200/api/users/register',data,{ responseType:'text'})
  }
  
loginUser(email: string, paswd: string) {
  //rest api call to express
  let loginData = {
    email: email,
    paswd: paswd
  };

  return this.myhttp.post('api/users/login', loginData);
}
jobs = [
  {
   id:0,
    title: "Backend Development",
    sub: "THIS",
    startdate: "Immediately",
    ctc: "6.6-8.2 LPA",
    location: "Bangalore",
    apply: "30 May'22",
    link: "#",
    type: "work from home"
  },

  {
   id:0,
    title: "Java Development",
    sub: "ORACLE",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Kolkata",
    apply: "30 May'22",
    link: "https://google.com",
    type: "Work from office"
  },

  {
   id:0,
    title: "Media",
    sub: "TCS",
    startdate: "Immediately",
    ctc: "4.5-7.8 LPA",
    location: "Delhi",
    apply: "1 Jun'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "CAD Design",
    sub: "INFOSY",
    startdate: "Immediately",
    ctc: "3.5-5.5 LPA",
    location: "Chennai",
    apply: "28 May'22",
    link: "https://google.com",
    type: "work from home"
  },
  {
   id:0,
    title: "Marketing Job",
    sub: "WIPRO",
    startdate: "Immediately",
    ctc: "3.5-4.8 LPA",
    location: "Hyderabad",
    apply: "24 May'22",
    link: "https://google.com", 
    type: "work from home"
  },
  {
   id:0,
    title: "NGO",
    sub: "WIPRO",
    startdate: "Immediately",
    ctc: "3.5-4.8 LPA",
    location: "Hyderabad",
    apply: "24 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "Medicine",
    sub: "TECH MEHINDRA",
    startdate: "Immediately",
    ctc: "6.5-8.8 LPA",
    location: "Mumbai",
    apply: "29 May'22",
    link: "https://google.com",
    type: "work from office"
  },

  {
   id:0,
    title: "Front End Development",
    sub: "CAPGEMINI",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Bangalore",
    apply: "28 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "NGO",
    sub: "COGNIZANT",
    startdate: "Immediately",
    ctc: "2.5-3.8 LPA",
    location: "Mumabi",
    apply: "27 May'22",
    link: "https://google.com",
    type: "work from office"
  },


  {
   id:0,
    title: "Backend Development",
    sub: "HP",
    startdate: "Immediately",
    ctc: "9.5-10.5 LPA",
    location: "Kolkata",
    apply: "26 May'22",
    link: "#",
    type: "Work from office"
  },

  {
   id:0,
    title: "MBA",
    sub: "WIPRO",
    startdate: "Immediately",
    ctc: "4.0-6.0 LPA",
    location: "Mumbai",
    apply: "25 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "Front End Development",
    sub: "ACCENTURE",
    startdate: "Immediately",
    ctc: "4.5-5.5 LPA",
    location: "Kolkata",
    apply: "24 May'22",
    link: "https://google.com",
    type: "Work from home"
  },

  {
   id:0,
    title: "Media",
    sub: "TECH MEHINDRA",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Chennai",
    apply: "30 May'22",
    link: "https://google.com",
    type: "Work from office"
  },

  {
   id:0,
    title: "Front End Development",
    sub: "THIS",
    startdate: "Immediately",
    ctc: "4.5-6.5 LPA",
    location: "Delhi",
    apply: "24 May'22",
    link: "https://google.com",
    type: "Work from home"
  },



  {
   id:0,
    title: "Java Development",
    sub: "HP",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Bangalore",
    apply: "29 May'22",
    link: "https://google.com",
    type: "work from office"
  },

  {
   id:0,
    title: "MBA",
    sub: "IBM",
    startdate: "Immediately",
    ctc: "5.9-8.8 LPA",
    location: "Kolkata",
    apply: "27 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "CAD Design",
    sub: "THBS",
    startdate: "Immediately",
    ctc: "7.5-8.5 LPA",
    location: "Mumbai",
    apply: "28 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "NGO",
    sub: "CAPGEMIN",
    startdate: "Immediately",
    ctc: "8.8-9.5 LPA",
    location: "Chennai",
    apply: "27 May'22",
    link: "https://google.com",
    type: "Work from office"
  },


  {
   id:0,
    title: "Backend Development",
    sub: "WIPRO",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Delhi",
    apply: "25 May'22",
    link: "#",
    type: "work from home"
  },

  {
   id:0,
    title: "Front End Development",
    sub: "SUN MOBILITY",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Mumbai",
    apply: "28 May'22",
    link: "https://google.com",
    type: "work from office"
  },



  {
   id:0,
    title: "Java Development",
    sub: "INFOSY",
    startdate: "Immediately",
    ctc: "5.3-6.8 LPA",
    location: "Delhi",
    apply: "29 May'22",
    link: "https://google.com",
    type: "work from home"
  },


  {
   id:0,
    title: "Humanities",
    sub: "THIS",
    startdate: "Immediately",
    ctc: "5.8-7.8 LPA",
    location: "Mumbai",
    apply: "27 May'22",
    link: "https://google.com",
    type: "work from office"
  },



  {
   id:0,
    title: "Front End Development",
    sub: "COGNIZANT",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Hyderabad",
    apply: "28 May'22",
    link: "https://google.com",
    type: "Work from office"
  },

  {
   id:0,
    title: "Java Development",
    sub: "IBM",
    startdate: "Immediately",
    ctc: "6.5-7.8 LPA",
    location: "Chennai",
    apply: "30 May'22",
    link: "https://google.com",
    type: "work from office"
  },


  {
   id:0,
    title: "CAD Design",
    sub: "HCL",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Bangalore",
    apply: "28 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "Front End Development",
    sub: "TCS",
    startdate: "Immediately",
    ctc: "4.5-5.8 LPA",
    location: "Chennai",
    apply: "26 May'22",
    link: "https://google.com",
    type: "work from office"
  },


  {
   id:0,
    title: "Backend Development",
    sub: "TCS",
    startdate: "Immediately",
    ctc: "3.5-4.8 LPA",
    location: "Mumbai",
    apply: "27 May'22",
    link: "#",
    type: "work from office"
  },

  {
   id:0,
    title: "CAD Design",
    sub: "TCS",
    startdate: "Immediately",
    ctc: "3.5-4.8 LPA",
    location: "Kolkata",
    apply: "26 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "Java Development",
    sub: "WIPRO",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Mumbai",
    apply: "25 May'22",
    link: "https://google.com",
    type: "work from office"
  },

  {
   id:0,
    title: "Media",
    sub: "THIS",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Mumbai",
    apply: "24 May'22",
    link: "https://google.com",
    type: "work from home"
  },


  {
   id:0,
    title: "CAD Design",
    sub: "IBM",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Delhi",
    apply: "29 May'22",
    link: "https://google.com",
    type: "work from home"
  },


  {
   id:0,
    title: "Java Development",
    sub: "TECH MAHINDRA ",
    startdate: "Immediately",
    ctc: "4.5-5.5 LPA",
    location: "Hyderabad",
    apply: "23 May'22",
    link: "https://google.com",
    type: "work from office"
  },




  {
   id:0,
    title: "CAD Design",
    sub: "ORACLE",
    startdate: "Immediately",
    ctc: "6.5-8.8 LPA",
    location: "Hyderabad",
    apply: "23 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "MBA",
    sub: "DQS INDIA",
    startdate: "Immediately",
    ctc: "5.5-7.5 LPA",
    location: "Bangalore",
    apply: "28 May'22",
    link: "https://google.com",
    type: "work from office"
  },



  {
   id:0,
    title: "Medicine",
    sub: "THBS",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Kolkata",
    apply: "24 May'22",
    link: "https://google.com",
    type: "work from office"
  },

  {
   id:0,
    title: "MBA",
    sub: "ORACLE",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Chennai",
    apply: "29 May'22",
    link: "https://google.com",
    type: "work from home"
  },



  {
   id:0,
    title: "Medicine",
    sub: "CAPGEMIN",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Bangalore",
    apply: "29 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "Backend Development",
    sub: "IBM",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Chennai",
    apply: "27 May'22",
    link: "#",
    type: "work from home"
  },



  {
   id:0,
    title: "Medicine",
    sub: "HCL",
    startdate: "Immediately",
    ctc: "3.5-4.8 LPA",
    location: "Delhi",
    apply: "24 May'22",
    link: "https://google.com",
    type: "Work from office"
  },

  {
   id:0,
    title: "NGO",
    sub: "TCS",
    startdate: "Kolkata",
    ctc: "5.5-7.8 LPA",
    location: "Bangalore",
    apply: "26 May'22",
    link: "https://google.com",
    type: "work from office"
  },

  {
   id:0,
    title: "MBA",
    sub: "ACCENTURE",
    startdate: "Immediately",
    ctc: "7.5-8.5 LPA",
    location: "Delhi",
    apply: "30 May'22",
    link: "https://google.com",
    type: "work from home"
  },



  {
   id:0,
    title: "Medicine",
    sub: "TCS",
    startdate: "Immediately",
    ctc: "5.5-7.5 LPA",
    location: "Chennai",
    apply: "26 May'22",
    link: "https://google.com",
    type: "work from office"
  },



  {
   id:0,
    title: "NGO",
    sub: "EUPRIME",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Bangalore",
    apply: "27 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "Medicine",
    sub: "HP",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Hyderabad",
    apply: "26 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "Humanities",
    sub: "TCS",
    startdate: "Immediately",
    ctc: "4.5-5.5 LPA",
    location: "Chennai",
    apply: "25 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "NGO",
    sub: "INFOSYS",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Bangalore",
    apply: "28 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "MBA",
    sub: "COGNIZANT",
    startdate: "Immediately",
    ctc: "7.5-8.5 LPA",
    location: "Hyderabad",
    apply: "27 May'22",
    link: "https://google.com",
    type: "work from office"
  },



  {
   id:0,
    title: "NGO",
    sub: "THBS",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Delhi",
    apply: "25 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "Humanities",
    sub: "CAPGEMINI",
    startdate: "Immediately",
    ctc: "3.5-4.5 LPA",
    location: "Delhi",
    apply: "24 May'22",
    link: "https://google.com",
    type: "work from office"
  },


  {
   id:0,
    title: "Media",
    sub: "WIPRO",
    startdate: "Immediately",
    ctc: "4.5-7.5 LPA",
    location: "Kolkata",
    apply: "27 May'22",
    link: "https://google.com",
    type: "work from home"
  },



  {
   id:0,
    title: "Humanities",
    sub: "MAGAMONEY CARTS PRIVATE LIMITED",
    startdate: "Immediately",
    ctc: "5.5-7.5 LPA",
    location: "Bangalore",
    apply: "25 May'22",
    link: "https://google.com",
    type: "Work from office"
  },

  {
   id:0,
    title: "Media",
    sub: "COGNIZANT",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Hyderabad",
    apply: "24 May'22",
    link: "https://google.com",
    type: "Work from office"
  },

  {
   id:0,
    title: "Humanities",
    sub: "HEXAWARE",
    startdate: "Immediately",
    ctc: "3.5-4.8 LPA",
    location: "Kolkata",
    apply: "25 May'22",
    link: "https://google.com",
    type: "work from home"
  },

  {
   id:0,
    title: "Backend Development",
    sub: "ORACLE",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Hyderabad",
    apply: "29 May'22",
    link: "#",
    type: "work from home"
  },



  {
   id:0,
    title: "Humanities",
    sub: "ORACLE",
    startdate: "Immediately",
    ctc: "4.5-5.8 LPA",
    location: "Hyderabad",
    apply: "23 May'22",
    link: "https://google.com",
    type: "work from office"
  }

]
internship = [
  {
    title: "Backend Development",
    sub: "THIS",
    startdate: "Immediately",
    duration: "3-months",
    stipend: "$7000/month",
    location: "Bangalore",
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
    location: "Bangalore",
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
    location: "Bangalore",
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
    location: "Bangalore",
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
    location: "Bangalore",
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
    location: "Bangalore",
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
    location: "Bangalore",
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
    location: "Bangalore",
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
    location: "Bangalore",
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
    location: "Bangalore",
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
}
