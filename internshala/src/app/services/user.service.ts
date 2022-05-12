import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface internship{
  id:any,
  email:any
}
interface job {
  id:any,
  email:any
}
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
internshipRegister:internship[]=[];
jobsRegister:job[]=[];
jobs = [
  {
   id:1,
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
   id:2,
    title: "Java Development",
    sub: "ORACLE",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Kolkata",
    apply: "30 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
   id:3,
    title: "Media",
    sub: "TCS",
    startdate: "Immediately",
    ctc: "4.5-7.8 LPA",
    location: "Delhi",
    apply: "1 Jun'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:4,
    title: "CAD Design",
    sub: "INFOSY",
    startdate: "Immediately",
    ctc: "3.5-5.5 LPA",
    location: "Chennai",
    apply: "28 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },
  {
   id:5,
    title: "Marketing Job",
    sub: "WIPRO",
    startdate: "Immediately",
    ctc: "3.5-4.8 LPA",
    location: "Hyderabad",
    apply: "24 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).", 
    type: "work from home"
  },
  {
   id:6,
    title: "NGO",
    sub: "WIPRO",
    startdate: "Immediately",
    ctc: "3.5-4.8 LPA",
    location: "Hyderabad",
    apply: "24 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:7,
    title: "Medicine",
    sub: "TECH MEHINDRA",
    startdate: "Immediately",
    ctc: "6.5-8.8 LPA",
    location: "Mumbai",
    apply: "29 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },

  {
   id:8,
    title: "Front End Development",
    sub: "CAPGEMINI",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Bangalore",
    apply: "28 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:9,
    title: "NGO",
    sub: "COGNIZANT",
    startdate: "Immediately",
    ctc: "2.5-3.8 LPA",
    location: "Mumabi",
    apply: "27 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },


  {
   id:10,
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
   id:11,
    title: "MBA",
    sub: "WIPRO",
    startdate: "Immediately",
    ctc: "4.0-6.0 LPA",
    location: "Mumbai",
    apply: "25 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:12,
    title: "Front End Development",
    sub: "ACCENTURE",
    startdate: "Immediately",
    ctc: "4.5-5.5 LPA",
    location: "Kolkata",
    apply: "24 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from home"
  },

  {
   id:13,
    title: "Media",
    sub: "TECH MEHINDRA",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Chennai",
    apply: "30 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
   id:14,
    title: "Front End Development",
    sub: "THIS",
    startdate: "Immediately",
    ctc: "4.5-6.5 LPA",
    location: "Delhi",
    apply: "24 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from home"
  },



  {
   id:15,
    title: "Java Development",
    sub: "HP",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Bangalore",
    apply: "29 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },

  {
   id:16,
    title: "MBA",
    sub: "IBM",
    startdate: "Immediately",
    ctc: "5.9-8.8 LPA",
    location: "Kolkata",
    apply: "27 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:17,
    title: "CAD Design",
    sub: "THBS",
    startdate: "Immediately",
    ctc: "7.5-8.5 LPA",
    location: "Mumbai",
    apply: "28 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:18,
    title: "NGO",
    sub: "CAPGEMIN",
    startdate: "Immediately",
    ctc: "8.8-9.5 LPA",
    location: "Chennai",
    apply: "27 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },


  {
   id:19,
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
   id:20,
    title: "Front End Development",
    sub: "SUN MOBILITY",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Mumbai",
    apply: "28 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },



  {
   id:21,
    title: "Java Development",
    sub: "INFOSY",
    startdate: "Immediately",
    ctc: "5.3-6.8 LPA",
    location: "Delhi",
    apply: "29 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },


  {
   id:22,
    title: "Humanities",
    sub: "THIS",
    startdate: "Immediately",
    ctc: "5.8-7.8 LPA",
    location: "Mumbai",
    apply: "27 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },



  {
   id:23,
    title: "Front End Development",
    sub: "COGNIZANT",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Hyderabad",
    apply: "28 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
   id:24,
    title: "Java Development",
    sub: "IBM",
    startdate: "Immediately",
    ctc: "6.5-7.8 LPA",
    location: "Chennai",
    apply: "30 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },


  {
   id:25,
    title: "CAD Design",
    sub: "HCL",
    startdate: "Immediately",
    ctc: "5.5-7.8 LPA",
    location: "Bangalore",
    apply: "28 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:26,
    title: "Front End Development",
    sub: "TCS",
    startdate: "Immediately",
    ctc: "4.5-5.8 LPA",
    location: "Chennai",
    apply: "26 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },


  {
   id:27,
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
   id:28,
    title: "CAD Design",
    sub: "TCS",
    startdate: "Immediately",
    ctc: "3.5-4.8 LPA",
    location: "Kolkata",
    apply: "26 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:29,
    title: "Java Development",
    sub: "WIPRO",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Mumbai",
    apply: "25 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },

  {
   id:30,
    title: "Media",
    sub: "THIS",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Mumbai",
    apply: "24 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },


  {
   id:31,
    title: "CAD Design",
    sub: "IBM",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Delhi",
    apply: "29 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },


  {
   id:32,
    title: "Java Development",
    sub: "TECH MAHINDRA ",
    startdate: "Immediately",
    ctc: "4.5-5.5 LPA",
    location: "Hyderabad",
    apply: "23 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },




  {
   id:33,
    title: "CAD Design",
    sub: "ORACLE",
    startdate: "Immediately",
    ctc: "6.5-8.8 LPA",
    location: "Hyderabad",
    apply: "23 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:34,
    title: "MBA",
    sub: "DQS INDIA",
    startdate: "Immediately",
    ctc: "5.5-7.5 LPA",
    location: "Bangalore",
    apply: "28 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },



  {
   id:35,
    title: "Medicine",
    sub: "THBS",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Kolkata",
    apply: "24 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },

  {
   id:36,
    title: "MBA",
    sub: "ORACLE",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Chennai",
    apply: "29 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },



  {
   id:37,
    title: "Medicine",
    sub: "CAPGEMIN",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Bangalore",
    apply: "29 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:38,
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
   id:39,
    title: "Medicine",
    sub: "HCL",
    startdate: "Immediately",
    ctc: "3.5-4.8 LPA",
    location: "Delhi",
    apply: "24 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
   id:40,
    title: "NGO",
    sub: "TCS",
    startdate: "Kolkata",
    ctc: "5.5-7.8 LPA",
    location: "Bangalore",
    apply: "26 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },

  {
   id:41,
    title: "MBA",
    sub: "ACCENTURE",
    startdate: "Immediately",
    ctc: "7.5-8.5 LPA",
    location: "Delhi",
    apply: "30 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },



  {
   id:42,
    title: "Medicine",
    sub: "TCS",
    startdate: "Immediately",
    ctc: "5.5-7.5 LPA",
    location: "Chennai",
    apply: "26 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },



  {
   id:43,
    title: "NGO",
    sub: "EUPRIME",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Bangalore",
    apply: "27 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:44,
    title: "Medicine",
    sub: "HP",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Hyderabad",
    apply: "26 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:45,
    title: "Humanities",
    sub: "TCS",
    startdate: "Immediately",
    ctc: "4.5-5.5 LPA",
    location: "Chennai",
    apply: "25 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:46,
    title: "NGO",
    sub: "INFOSYS",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Bangalore",
    apply: "28 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:47,
    title: "MBA",
    sub: "COGNIZANT",
    startdate: "Immediately",
    ctc: "7.5-8.5 LPA",
    location: "Hyderabad",
    apply: "27 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },



  {
   id:48,
    title: "NGO",
    sub: "THBS",
    startdate: "Immediately",
    ctc: "5.5-6.5 LPA",
    location: "Delhi",
    apply: "25 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:49,
    title: "Humanities",
    sub: "CAPGEMINI",
    startdate: "Immediately",
    ctc: "3.5-4.5 LPA",
    location: "Delhi",
    apply: "24 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },


  {
   id:50,
    title: "Media",
    sub: "WIPRO",
    startdate: "Immediately",
    ctc: "4.5-7.5 LPA",
    location: "Kolkata",
    apply: "27 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },



  {
   id:51,
    title: "Humanities",
    sub: "MAGAMONEY CARTS PRIVATE LIMITED",
    startdate: "Immediately",
    ctc: "5.5-7.5 LPA",
    location: "Bangalore",
    apply: "25 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
   id:52,
    title: "Media",
    sub: "COGNIZANT",
    startdate: "Immediately",
    ctc: "6.5-7.5 LPA",
    location: "Hyderabad",
    apply: "24 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
   id:53,
    title: "Humanities",
    sub: "HEXAWARE",
    startdate: "Immediately",
    ctc: "3.5-4.8 LPA",
    location: "Kolkata",
    apply: "25 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
   id:54,
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
   id:55,
    title: "Humanities",
    sub: "ORACLE",
    startdate: "Immediately",
    ctc: "4.5-5.8 LPA",
    location: "Hyderabad",
    apply: "23 May'22",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  }

]
internship = [
  {
    id:1,
    title: "Backend Development",
    sub: "THIS",
    startdate: "Immediately",
    duration: "3-months",
    stipend: "$7000/month",
    location: "Bangalore",
    apply: "ASAP",
    link: "#",
    type: "work from home",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
  },

  {
    id:2,
    title: "Java Development",
    sub: "ORACLE",
    startdate: "Immediately",
    duration: "6-months",
    stipend: "$8000/month",
    location: "Kolkata",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
    id:3,
    title: "Media",
    sub: "TCS",
    startdate: "Immediately",
    duration: "3-months",
    stipend: "$5000/month",
    location: "Delhi",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:4,
    title: "CAD Design",
    sub: "INFOSY",
    startdate: "Immediately",
    duration: "7-months",
    stipend: "$7800/month",
    location: "Chennai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:5,
    title: "NGO",
    sub: "WIPRO",
    startdate: "Immediately",
    duration: "6-months",
    stipend: "$3000/month",
    location: "Hyderabad",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:6,
    title: "Medicine",
    sub: "TECH MEHINDRA",
    startdate: "Immediately",
    duration: "6-months",
    stipend: "$7000/month",
    location: "Mumbai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },

  {
    id:7,
    title: "Front End Development",
    sub: "CAPGEMINI",
    startdate: "Immediately",
    duration: "4-months",
    stipend: "$3500/month",
    location: "Bangalore",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:8,
    title: "NGO",
    sub: "COGNIZANT",
    startdate: "Immediately",
    duration: "3-months",
    stipend: "$3500/month",
    location: "Mumabi",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },


  {
    id:9,
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
    id:10,
    title: "MBA",
    sub: "WIPRO",
    startdate: "Immediately",
    duration: "9-months",
    stipend: "$10000/month",
    location: "Mumbai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:11,
    title: "Front End Development",
    sub: "ACCENTURE",
    startdate: "Immediately",
    duration: "5-months",
    stipend: "$5500/month",
    location: "Kolkata",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from home"
  },

  {
    id:12,
    title: "Media",
    sub: "TECH MEHINDRA",
    startdate: "Immediately",
    duration: "3-months",
    stipend: "$9000/month",
    location: "Chennai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
    id:13,
    title: "Front End Development",
    sub: "THIS",
    startdate: "Immediately",
    duration: "6-months",
    stipend: "$9000/month",
    location: "Delhi",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from home"
  },



  {
    id:14,
    title: "Java Development",
    sub: "HP",
    startdate: "Immediately",
    duration: "6-months",
    stipend: "$8000/month",
    location: "Bangalore",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },

  {
    id:15,
    title: "MBA",
    sub: "IBM",
    startdate: "Immediately",
    duration: "4-months",
    stipend: "$4500/month",
    location: "Kolkata",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:16,
    title: "CAD Design",
    sub: "THBS",
    startdate: "Immediately",
    duration: "4-months",
    stipend: "$5800/month",
    location: "Mumbai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:17,
    title: "NGO",
    sub: "CAPGEMIN",
    startdate: "Immediately",
    duration: "7-months",
    stipend: "$9000/month",
    location: "Chennai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },


  {
    id:18,
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
    id:19,
    title: "Front End Development",
    sub: "SUN MOBILITY",
    startdate: "Immediately",
    duration: "4-months",
    stipend: "$3500/month",
    location: "Mumbai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },



  {
    id:20,
    title: "Java Development",
    sub: "INFOSY",
    startdate: "Immediately",
    duration: "4-months",
    stipend: "$8000/month",
    location: "Delhi",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },


  {
    id:21,
    title: "Humanities",
    sub: "THIS",
    startdate: "Immediately",
    duration: "7-months",
    stipend: "$7000/month",
    location: "Mumbai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },



  {
    id:22,
    title: "Front End Development",
    sub: "COGNIZANT",
    startdate: "Immediately",
    duration: "8-months",
    stipend: "$3500/month",
    location: "Hyderabad",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
    id:23,
    title: "Java Development",
    sub: "IBM",
    startdate: "Immediately",
    duration: "6-months",
    stipend: "$8000/month",
    location: "Chennai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },


  {
    id:24,
    title: "CAD Design",
    sub: "HCL",
    startdate: "Immediately",
    duration: "4-months",
    stipend: "$5800/month",
    location: "Bangalore",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:25,
    title: "Front End Development",
    sub: "TCS",
    startdate: "Immediately",
    duration: "4-months",
    stipend: "$3500/month",
    location: "Chennai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },


  {
    id:26,
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
    id:27,
    title: "CAD Design",
    sub: "TCS",
    startdate: "Immediately",
    duration: "9-months",
    stipend: "$9000/month",
    location: "Kolkata",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:28,
    title: "Java Development",
    sub: "WIPRO",
    startdate: "Immediately",
    duration: "3-months",
    stipend: "$3000/month",
    location: "Mumbai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },

  {
    id:29,
    title: "Media",
    sub: "THIS",
    startdate: "Immediately",
    duration: "9-months",
    stipend: "$10000/month",
    location: "Mumbai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },


  {
    id:30,
    title: "CAD Design",
    sub: "IBM",
    startdate: "Immediately",
    duration: "4-months",
    stipend: "$5800/month",
    location: "Delhi",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },


  {
    id:31,
    title: "Java Development",
    sub: "TECH MAHINDRA ",
    startdate: "Immediately",
    duration: "8-months",
    stipend: "$8000/month",
    location: "Hyderabad",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },




  {
    id:32,
    title: "CAD Design",
    sub: "ORACLE",
    startdate: "Immediately",
    duration: "3-months",
    stipend: "$9800/month",
    location: "Hyderabad",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:33,
    title: "MBA",
    sub: "DQS INDIA",
    startdate: "Immediately",
    duration: "8-months",
    stipend: "$4500/month",
    location: "Bangalore",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).", 
    type: "work from office"
  },



  {
    id:34,
    title: "Medicine",
    sub: "THBS",
    startdate: "Immediately",
    duration: "2-months",
    stipend: "$6000/month",
    location: "Kolkata",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },

  {
    id:35,
    title: "MBA",
    sub: "ORACLE",
    startdate: "Immediately",
    duration: "8-months",
    stipend: "$4500/month",
    location: "Chennai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },



  {
    id:36,
    title: "Medicine",
    sub: "CAPGEMIN",
    startdate: "Immediately",
    duration: "11-months",
    stipend: "$6000/month",
    location: "Bangalore",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:37,
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
    id:38,
    title: "Medicine",
    sub: "HCL",
    startdate: "Immediately",
    duration: "6-months",
    stipend: "$6000/month",
    location: "Delhi",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
    id:39,
    title: "NGO",
    sub: "TCS",
    startdate: "Kolkata",
    duration: "8-months",
    stipend: "$7000/month",
    location: "Bangalore",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },

  {
    id:40,
    title: "MBA",
    sub: "ACCENTURE",
    startdate: "Immediately",
    duration: "9-months",
    stipend: "$5500/month",
    location: "Delhi",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },



  {
    id:41,
    title: "Medicine",
    sub: "TCS",
    startdate: "Immediately",
    duration: "11-months",
    stipend: "$6000/month",
    location: "Chennai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },



  {
    id:42,
    title: "NGO",
    sub: "EUPRIME",
    startdate: "Immediately",
    duration: "8-months",
    stipend: "$9000/month",
    location: "Bangalore",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:43,
    title: "Medicine",
    sub: "HP",
    startdate: "Immediately",
    duration: "6-months",
    stipend: "$7000/month",
    location: "Hyderabad",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:44,
    title: "Humanities",
    sub: "TCS",
    startdate: "Immediately",
    duration: "9-months",
    stipend: "$10000/month",
    location: "Chennai",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:45,
    title: "NGO",
    sub: "INFOSYS",
    startdate: "Immediately",
    duration: "3-months",
    stipend: "$8000/month",
    location: "Bangalore",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:46,
    title: "MBA",
    sub: "COGNIZANT",
    startdate: "Immediately",
    duration: "8-months",
    stipend: "$8500/month",
    location: "Hyderabad",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },



  {
    id:47,
    title: "NGO",
    sub: "THBS",
    startdate: "Immediately",
    duration: "10-months",
    stipend: "$8000/month",
    location: "Delhi",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:48,
    title: "Humanities",
    sub: "CAPGEMINI",
    startdate: "Immediately",
    duration: "6-months",
    stipend: "$5000/month",
    location: "Delhi",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  },


  {
    id:49,
    title: "Media",
    sub: "WIPRO",
    startdate: "Immediately",
    duration: "3-months",
    stipend: "$7000/month",
    location: "Kolkata",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },



  {
    id:50,
    title: "Humanities",
    sub: "MAGAMONEY CARTS PRIVATE LIMITED",
    startdate: "Immediately",
    duration: "8-months",
    stipend: "$6000/month",
    location: "Bangalore",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
    id:51,
    title: "Media",
    sub: "COGNIZANT",
    startdate: "Immediately",
    duration: "4-months",
    stipend: "$8000/month",
    location: "Hyderabad",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "Work from office"
  },

  {
    id:52,
    title: "Humanities",
    sub: "HEXAWARE",
    startdate: "Immediately",
    duration: "4-months",
    stipend: "$4000/month",
    location: "Kolkata",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from home"
  },

  {
    id:53,
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
    id:54,
    title: "Humanities",
    sub: "ORACLE",
    startdate: "Immediately",
    duration: "2-months",
    stipend: "$5000/month",
    location: "Hyderabad",
    apply: "ASAP",
    decription:"Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
    type: "work from office"
  }

]
}
