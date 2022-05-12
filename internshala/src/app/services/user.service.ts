import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface internship {
  id: any,
  email: any
}
interface job {
  id: any,
  email: any
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private myhttp: HttpClient) { }
  getProfile() {
    return this.myhttp.get('http://localhost:4200/api/users')
  }
  registerDetails(data: any) {
    return this.myhttp.post('http://localhost:4200/api/users/register', data, { responseType: 'text' })
  }

  loginUser(email: string, paswd: string) {
    //rest api call to express
    let loginData = {
      email: email,
      paswd: paswd
    };

    return this.myhttp.post('api/users/login', loginData);
  }
  internshipRegister: internship[] = [];
  jobsRegister: job[] = [];
  jobs = [
    {
      id: 1,
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
      id: 2,
      title: "Java Development",
      sub: "ORACLE",
      startdate: "Immediately",
      ctc: "5.5-7.8 LPA",
      location: "Kolkata",
      apply: "30 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office"
    },

    {
      id: 3,
      title: "Media",
      sub: "TCS",
      startdate: "Immediately",
      ctc: "4.5-7.8 LPA",
      location: "Delhi",
      apply: "1 Jun'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 4,
      title: "CAD Design",
      sub: "INFOSY",
      startdate: "Immediately",
      ctc: "3.5-5.5 LPA",
      location: "Chennai",
      apply: "28 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },
    {
      id: 5,
      title: "Marketing Job",
      sub: "WIPRO",
      startdate: "Immediately",
      ctc: "3.5-4.8 LPA",
      location: "Hyderabad",
      apply: "24 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },
    {
      id: 6,
      title: "NGO",
      sub: "WIPRO",
      startdate: "Immediately",
      ctc: "3.5-4.8 LPA",
      location: "Hyderabad",
      apply: "24 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 7,
      title: "Medicine",
      sub: "TECH MEHINDRA",
      startdate: "Immediately",
      ctc: "6.5-8.8 LPA",
      location: "Mumbai",
      apply: "29 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },

    {
      id: 8,
      title: "Front End Development",
      sub: "CAPGEMINI",
      startdate: "Immediately",
      ctc: "5.5-7.8 LPA",
      location: "Bangalore",
      apply: "28 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 9,
      title: "NGO",
      sub: "COGNIZANT",
      startdate: "Immediately",
      ctc: "2.5-3.8 LPA",
      location: "Mumabi",
      apply: "27 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },


    {
      id: 10,
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
      id: 11,
      title: "MBA",
      sub: "WIPRO",
      startdate: "Immediately",
      ctc: "4.0-6.0 LPA",
      location: "Mumbai",
      apply: "25 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 12,
      title: "Front End Development",
      sub: "ACCENTURE",
      startdate: "Immediately",
      ctc: "4.5-5.5 LPA",
      location: "Kolkata",
      apply: "24 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from home"
    },

    {
      id: 13,
      title: "Media",
      sub: "TECH MEHINDRA",
      startdate: "Immediately",
      ctc: "6.5-7.5 LPA",
      location: "Chennai",
      apply: "30 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office"
    },

    {
      id: 14,
      title: "Front End Development",
      sub: "THIS",
      startdate: "Immediately",
      ctc: "4.5-6.5 LPA",
      location: "Delhi",
      apply: "24 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from home"
    },



    {
      id: 15,
      title: "Java Development",
      sub: "HP",
      startdate: "Immediately",
      ctc: "5.5-7.8 LPA",
      location: "Bangalore",
      apply: "29 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },

    {
      id: 16,
      title: "MBA",
      sub: "IBM",
      startdate: "Immediately",
      ctc: "5.9-8.8 LPA",
      location: "Kolkata",
      apply: "27 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 17,
      title: "CAD Design",
      sub: "THBS",
      startdate: "Immediately",
      ctc: "7.5-8.5 LPA",
      location: "Mumbai",
      apply: "28 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 18,
      title: "NGO",
      sub: "CAPGEMIN",
      startdate: "Immediately",
      ctc: "8.8-9.5 LPA",
      location: "Chennai",
      apply: "27 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office"
    },


    {
      id: 19,
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
      id: 20,
      title: "Front End Development",
      sub: "SUN MOBILITY",
      startdate: "Immediately",
      ctc: "5.5-7.8 LPA",
      location: "Mumbai",
      apply: "28 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },



    {
      id: 21,
      title: "Java Development",
      sub: "INFOSY",
      startdate: "Immediately",
      ctc: "5.3-6.8 LPA",
      location: "Delhi",
      apply: "29 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },


    {
      id: 22,
      title: "Humanities",
      sub: "THIS",
      startdate: "Immediately",
      ctc: "5.8-7.8 LPA",
      location: "Mumbai",
      apply: "27 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },



    {
      id: 23,
      title: "Front End Development",
      sub: "COGNIZANT",
      startdate: "Immediately",
      ctc: "5.5-7.8 LPA",
      location: "Hyderabad",
      apply: "28 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office"
    },

    {
      id: 24,
      title: "Java Development",
      sub: "IBM",
      startdate: "Immediately",
      ctc: "6.5-7.8 LPA",
      location: "Chennai",
      apply: "30 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },


    {
      id: 25,
      title: "CAD Design",
      sub: "HCL",
      startdate: "Immediately",
      ctc: "5.5-7.8 LPA",
      location: "Bangalore",
      apply: "28 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 26,
      title: "Front End Development",
      sub: "TCS",
      startdate: "Immediately",
      ctc: "4.5-5.8 LPA",
      location: "Chennai",
      apply: "26 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },


    {
      id: 27,
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
      id: 28,
      title: "CAD Design",
      sub: "TCS",
      startdate: "Immediately",
      ctc: "3.5-4.8 LPA",
      location: "Kolkata",
      apply: "26 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 29,
      title: "Java Development",
      sub: "WIPRO",
      startdate: "Immediately",
      ctc: "6.5-7.5 LPA",
      location: "Mumbai",
      apply: "25 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },

    {
      id: 30,
      title: "Media",
      sub: "THIS",
      startdate: "Immediately",
      ctc: "5.5-6.5 LPA",
      location: "Mumbai",
      apply: "24 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },


    {
      id: 31,
      title: "CAD Design",
      sub: "IBM",
      startdate: "Immediately",
      ctc: "6.5-7.5 LPA",
      location: "Delhi",
      apply: "29 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },


    {
      id: 32,
      title: "Java Development",
      sub: "TECH MAHINDRA ",
      startdate: "Immediately",
      ctc: "4.5-5.5 LPA",
      location: "Hyderabad",
      apply: "23 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },




    {
      id: 33,
      title: "CAD Design",
      sub: "ORACLE",
      startdate: "Immediately",
      ctc: "6.5-8.8 LPA",
      location: "Hyderabad",
      apply: "23 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 34,
      title: "MBA",
      sub: "DQS INDIA",
      startdate: "Immediately",
      ctc: "5.5-7.5 LPA",
      location: "Bangalore",
      apply: "28 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },



    {
      id: 35,
      title: "Medicine",
      sub: "THBS",
      startdate: "Immediately",
      ctc: "5.5-6.5 LPA",
      location: "Kolkata",
      apply: "24 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },

    {
      id: 36,
      title: "MBA",
      sub: "ORACLE",
      startdate: "Immediately",
      ctc: "6.5-7.5 LPA",
      location: "Chennai",
      apply: "29 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },



    {
      id: 37,
      title: "Medicine",
      sub: "CAPGEMIN",
      startdate: "Immediately",
      ctc: "5.5-6.5 LPA",
      location: "Bangalore",
      apply: "29 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 38,
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
      id: 39,
      title: "Medicine",
      sub: "HCL",
      startdate: "Immediately",
      ctc: "3.5-4.8 LPA",
      location: "Delhi",
      apply: "24 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office"
    },

    {
      id: 40,
      title: "NGO",
      sub: "TCS",
      startdate: "Kolkata",
      ctc: "5.5-7.8 LPA",
      location: "Bangalore",
      apply: "26 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },

    {
      id: 41,
      title: "MBA",
      sub: "ACCENTURE",
      startdate: "Immediately",
      ctc: "7.5-8.5 LPA",
      location: "Delhi",
      apply: "30 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },



    {
      id: 42,
      title: "Medicine",
      sub: "TCS",
      startdate: "Immediately",
      ctc: "5.5-7.5 LPA",
      location: "Chennai",
      apply: "26 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },



    {
      id: 43,
      title: "NGO",
      sub: "EUPRIME",
      startdate: "Immediately",
      ctc: "6.5-7.5 LPA",
      location: "Bangalore",
      apply: "27 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 44,
      title: "Medicine",
      sub: "HP",
      startdate: "Immediately",
      ctc: "5.5-6.5 LPA",
      location: "Hyderabad",
      apply: "26 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 45,
      title: "Humanities",
      sub: "TCS",
      startdate: "Immediately",
      ctc: "4.5-5.5 LPA",
      location: "Chennai",
      apply: "25 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 46,
      title: "NGO",
      sub: "INFOSYS",
      startdate: "Immediately",
      ctc: "5.5-6.5 LPA",
      location: "Bangalore",
      apply: "28 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 47,
      title: "MBA",
      sub: "COGNIZANT",
      startdate: "Immediately",
      ctc: "7.5-8.5 LPA",
      location: "Hyderabad",
      apply: "27 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },



    {
      id: 48,
      title: "NGO",
      sub: "THBS",
      startdate: "Immediately",
      ctc: "5.5-6.5 LPA",
      location: "Delhi",
      apply: "25 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 49,
      title: "Humanities",
      sub: "CAPGEMINI",
      startdate: "Immediately",
      ctc: "3.5-4.5 LPA",
      location: "Delhi",
      apply: "24 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    },


    {
      id: 50,
      title: "Media",
      sub: "WIPRO",
      startdate: "Immediately",
      ctc: "4.5-7.5 LPA",
      location: "Kolkata",
      apply: "27 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },



    {
      id: 51,
      title: "Humanities",
      sub: "MAGAMONEY CARTS PRIVATE LIMITED",
      startdate: "Immediately",
      ctc: "5.5-7.5 LPA",
      location: "Bangalore",
      apply: "25 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office"
    },

    {
      id: 52,
      title: "Media",
      sub: "COGNIZANT",
      startdate: "Immediately",
      ctc: "6.5-7.5 LPA",
      location: "Hyderabad",
      apply: "24 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office"
    },

    {
      id: 53,
      title: "Humanities",
      sub: "HEXAWARE",
      startdate: "Immediately",
      ctc: "3.5-4.8 LPA",
      location: "Kolkata",
      apply: "25 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home"
    },

    {
      id: 54,
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
      id: 55,
      title: "Humanities",
      sub: "ORACLE",
      startdate: "Immediately",
      ctc: "4.5-5.8 LPA",
      location: "Hyderabad",
      apply: "23 May'22",
      decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office"
    }

  ]
  internship = [
    {
      id: 1,
      title: "Backend Development",
      sub: "THIS",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$7000/month",
      location: "Bangalore",
      apply: "ASAP",
      link: "#",
      type: "work from home",
      company: "The Company Torry Harris Business Solutions (THBS), founded in 1998, is headquartered in New Jersey, USA. The company is a trusted advisor to enterprises worldwide, helping them extend the power of digital access through integration.",
      decription: "Design and development of all server-side logic,Work on integration with databases, Coordinate with the rest of the team working on different layers of the infrastructure Integrate the front-end elements built by your co-workers into the application.",
      skills: "Node.js, Rust, SQL",
      listskills: "Learn SQL, Learn Node.JS, Learn Web Development, Learn Data Structures & Algorithms",
      whocanapply: "1. are available for the work from home job/internship, 2. can start the work from home job/internship immediately, 3. are available for duration of 3 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "5"
    },

    {
      id: 2,
      title: "Java Development",
      sub: "ORACLE",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$8000/month",
      location: "Kolkata",
      apply: "ASAP",
// decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office",
      company: "Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas. In 2020, Oracle was the second-largest software company in the world by revenue and market capitalization.",
      decription: " working on Spring MVC, JavaScript, J2EE, Servlet, HTML, MySql, SQL Server, and CSS.",
      skills: "Eclipse (IDE), Hibernate (Java),J2EE, Java, JSP, MySQL, Spring MVC",
      listskills: "Learn Java, Learn Voice App Development,Learn MySQL",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 6 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },

    {
      id: 3,
      title: "Media",
      sub: "TCS",
      startdate: "Immediately",
      duration: "3-months", 
      stipend: "$5000/month",
      location: "Delhi",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Tata Consultancy Services is an Indian multinational information technology services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 149 locations across 46 countries.",
      decription: "1. Handle all digital marketing activities, 2. Create backlinks for our clients",
      skills: "Digital Marketing, Search Engine Marketing (SEM), Search Engine Optimization (SEO)",
      listskills: "Learn Search Engine Marketing, Learn SEO",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 3 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate,  Letter of recommendation,  Flexible work hours",
      openings: "4"
    },

    {
      id: 4,
      title: "CAD Design",
      sub: "INFOSY",
      startdate: "Immediately",
      duration: "7-months",
      stipend: "$7800/month",
      location: "Chennai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services. The company was founded in Pune and is headquartered in Bangalore",
      decription: " 1. Work on CAD fashion designing (we will provide fabric pictures, and brainstorm ideas to present, 2. Help post the ready CAD sketch and fabric pictures",
      skills: "Adobe Photoshop, Adobe Photoshop Lightroom CC, CAD, Facebook Marketing, Instagram Marketing",
      listskills: "Learn Adobe Photoshop, Learn Facebook Marketing",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 7 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Informal dress code,Job offer",
      openings: "3"
    },

    {
      id: 5,
      title: "NGO",
      sub: "WIPRO",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$3000/month",
      location: "Hyderabad",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. Thierry Delaporte has served as CEO and managing director of Wipro since July 2020. It is headquartered in Bangalore, Karnataka, India. ",
      decription: " Childo Education Research and Development Foundation is a nonprofit organization(Section-8 company) committed to providing quality education to everyone without any discrimination.Selected volunteer's day-to-day responsibilities include: 1. Running an online supporting fundraising campaign to raise funds, 2. Understanding the initiatives and spreading awareness",
      skills: "Communication",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 6 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation",
      openings: "40"
    },

    {
      id: 6,
      title: "Medicine",
      sub: "TECH MEHINDRA",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$7000/month",
      location: "Mumbai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      company: "Tech Mahindra is an Indian multinational information technology services and consulting company. Part of the Mahindra Group, the company is headquartered in Pune and has its registered office in Mumbai. Tech Mahindra is a US$5.2 billion company with over 145,000 employees across 90 countries.",
      decription: "1. Conducting in-depth research on medical topics in order to develop original content, 2. Developing content for social media, based on editorial guidelines and reliable medical sources 3. Ensuring the content is written in flawless English,4. Ensuring the content is 100% medically accurate and comprehensive, 5. Proofreading content for errors and inconsistencies, 6. Editing and polishing content to improve readability, relatability, and understanding, 7. Conducting keyword research and using SEO best practices to increase traffic, 8. Evaluating analytics to adjust content as needed, 9 Creating compelling headlines and body copy that will capture the attention of the target audience, 10. Identifying the audience's needs and recommending new content, 11. Contributing to the development of content strategies that will increase customers, followers, and engagement",
      skills: "Creative Writing, Digital Marketing, Molecular Medicine, Research and Analytics, Search Engine Optimization (SEO), Social Media Marketing",
      listskills: "Learn Social Media Marketing, Learn SEO, Learn Creative Writing, Learn Research and Analytics",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 6 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },

    {
      id: 7,
      title: "Front End Development",
      sub: "CAPGEMINI",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$3500/month",
      location: "Bangalore",
      apply: "ASAP",
      type: "work from home",
      decription: "About the internship: Selected intern's day-to-day responsibilities include: 1. Manage accounts and contacts in Salesforce 2. Develop responsive email templates using HTML/CSS and JavaScript, 3. Create and manage bulk/on-demand emails sends in the marketing cloud, 4. Create and manage SMS campaigns with the mobile connect module, 5. Learn and use SOQL query language and AMPscript, 6. Gain working knowledge to manage customer journeys in Automation Studio, 7. Learn and apply advanced skills like Lightning Web components Apex and SOSL",
      company: "Capgemini is a global leader in consulting, digital transformation, technology and engineering services.",
      skills: "CSS,HTML,JavaScript",
      listskills: "Learn HTML, Learn CSS, Learn Node.JS using Javascript, Learn Software Testing using Javascript",
      whocanapply: "1. are available for full time (in-home) internship 2. can start the internship on Immediately. are available for duration of 4 months.  4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Job offer",
      openings: "4"
    },

    {
      id: 8,
      title: "NGO",
      sub: "COGNIZANT",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$3500/month",
      location: "Mumabi",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      company: "Cognizant is an American multinational information technology services and consulting company. It is headquartered in Teaneck, New Jersey, United States. Cognizant is part of the NASDAQ-100 and trades under CTSH",
      decription: " Childo Education Research and Development Foundation is a nonprofit organization(Section-8 company) committed to providing quality education to everyone without any discrimination.Selected volunteer's day-to-day responsibilities include: 1. Running an online supporting fundraising campaign to raise funds, 2. Understanding the initiatives and spreading awareness",
      skills: "Communication",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 3 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation",
      openings: "11"
    },


    {
      id: 9,
      title: "Backend Development",
      sub: "HP",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$10000/month",
      location: "Kolkata",
      apply: "ASAP",
      link: "#",
      type: "Work from office",
      company: "HP Inc. is an American multinational information technology company headquartered in Palo Alto, California, that develops personal computers, printers and related supplies, as well as 3D printing solutions.",
      decription: "Design and development of all server-side logic,Work on integration with databases, Coordinate with the rest of the team working on different layers of the infrastructure Integrate the front-end elements built by your co-workers into the application.",
      skills: "Node.js, Rust, SQL",
      listskills: "Learn SQL, Learn Node.JS, Learn Web Development, Learn Data Structures & Algorithms",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 4 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "5"
    },

    {
      id: 10,
      title: "MBA",
      sub: "WIPRO",
      startdate: "Immediately",
      duration: "9-months",
      stipend: "$10000/month",
      location: "Mumbai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. Thierry Delaporte has served as CEO and managing director of Wipro since July 2020. It is headquartered in Bangalore, Karnataka, India. ",
      decription: "1. Prepare, compile and sort documents/videos/post for data entry,2. Check source documents for accuracy 3. Verify data and correct data where necessary, 4. Obtain further information for incomplete documents/videos/posts, 5. Update data and delete unnecessary files, 6. Combine and rearrange data from source documents where required 7. Enter data from source prescribed computer database, files, and forms",
      skills: "BIG DATA ANALYTICS, Canva, Data Analytics,Data Structures, English Proficiency (Spoken), English Proficiency (Written),Google Analytics, Google Workspace, Hindi Proficiency (Written),MS-Excel,MS-Office,MS-PowerPoint,MS-Word",
      listskills: "Learn Google Analytics, Learn Data Structures,Learn Data Analytics,Learn MS-Excel,Learn Business Communication",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 4 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },

    {
      id: 11,
      title: "Front End Development",
      sub: "ACCENTURE",
      startdate: "Immediately",
      duration: "5-months",
      stipend: "$5500/month",
      location: "Kolkata",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from home",
      decription: "About the internship: Selected intern's day-to-day responsibilities include: 1. Manage accounts and contacts in Salesforce 2. Develop responsive email templates using HTML/CSS and JavaScript, 3. Create and manage bulk/on-demand emails sends in the marketing cloud, 4. Create and manage SMS campaigns with the mobile connect module, 5. Learn and use SOQL query language and AMPscript, 6. Gain working knowledge to manage customer journeys in Automation Studio, 7. Learn and apply advanced skills like Lightning Web components Apex and SOSL",
      company: "Accenture plc is an Ireland-based multinational professional services company that specialises in information technology services and consulting. A Fortune Global 500 company, it reported revenues of $50.53 billion in 2021.",
      skills: "CSS,HTML,JavaScript",
      listskills: "Learn HTML, Learn CSS, Learn Node.JS using Javascript, Learn Software Testing using Javascript",
      whocanapply: "1. are available for full time (in-home) internship 2. can start the internship on Immediately. are available for duration of 6 months.  4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Job offer",
      openings: "7"
    },

    {
      id: 12,
      title: "Media",
      sub: "TECH MEHINDRA",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$9000/month",
      location: "Chennai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office",
      company: "Tech Mahindra is an Indian multinational information technology services and consulting company. Part of the Mahindra Group, the company is headquartered in Pune and has its registered office in Mumbai. Tech Mahindra is a US$5.2 billion company with over 145,000 employees across 90 countries.",
      decription: "1. Handle all digital marketing activities, 2. Create backlinks for our clients",
      skills: "Digital Marketing, Search Engine Marketing (SEM), Search Engine Optimization (SEO)",
      listskills: "Learn Search Engine Marketing, Learn SEO",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 3 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate,  Letter of recommendation,  Flexible work hours",
      openings: "8"
    },

    {
      id: 13,
      title: "Front End Development",
      sub: "THIS",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$9000/month",
      location: "Delhi",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from home",
      decription: "About the internship: Selected intern's day-to-day responsibilities include: 1. Manage accounts and contacts in Salesforce 2. Develop responsive email templates using HTML/CSS and JavaScript, 3. Create and manage bulk/on-demand emails sends in the marketing cloud, 4. Create and manage SMS campaigns with the mobile connect module, 5. Learn and use SOQL query language and AMPscript, 6. Gain working knowledge to manage customer journeys in Automation Studio, 7. Learn and apply advanced skills like Lightning Web components Apex and SOSL",
      company: "The Company Torry Harris Integration Solutions (THIS), founded in 1998, is headquartered in New Jersey, USA. The company is a trusted advisor to enterprises worldwide, helping them extend the power of digital access through integration.",
      skills: "CSS,HTML,JavaScript",
      listskills: "Learn HTML, Learn CSS, Learn Node.JS using Javascript, Learn Software Testing using Javascript",
      whocanapply: "1. are available for full time (in-home) internship 2. can start the internship on Immediately. are available for duration of 6 months.  4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Job offer",
      openings: "7"
    },

/////////////////////////////////

    {
      id: 14,
      title: "Java Development",
      sub: "HP",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$8000/month",
      location: "Bangalore",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      company: "HP Inc. is an American multinational information technology company headquartered in Palo Alto, California, that develops personal computers, printers and related supplies, as well as 3D printing solutions.",
      decription: " working on Spring MVC, JavaScript, J2EE, Servlet, HTML, MySql, SQL Server, and CSS.",
      skills: "Eclipse (IDE), Hibernate (Java),J2EE, Java, JSP, MySQL, Spring MVC",
      listskills: "Learn Java, Learn Voice App Development,Learn MySQL",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 6 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "3"
    },

    {
      id: 15,
      title: "MBA",
      sub: "IBM",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$4500/month",
      location: "Kolkata",
      apply: "ASAP",
      type: "work from home",
      company: "International Business Machines Corporation is an American multinational technology corporation headquartered in Armonk, New York, with operations in over 171 countries. ",
      decription: "1. Prepare, compile and sort documents/videos/post for data entry,2. Check source documents for accuracy 3. Verify data and correct data where necessary, 4. Obtain further information for incomplete documents/videos/posts, 5. Update data and delete unnecessary files, 6. Combine and rearrange data from source documents where required 7. Enter data from source prescribed computer database, files, and forms",
      skills: "BIG DATA ANALYTICS, Canva, Data Analytics,Data Structures, English Proficiency (Spoken), English Proficiency (Written),Google Analytics, Google Workspace, Hindi Proficiency (Written),MS-Excel,MS-Office,MS-PowerPoint,MS-Word",
      listskills: "Learn Google Analytics, Learn Data Structures,Learn Data Analytics,Learn MS-Excel,Learn Business Communication",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 4 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },

    {
      id: 16,
      title: "CAD Design",
      sub: "THBS",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$5800/month",
      location: "Mumbai",
      apply: "ASAP",
       type: "work from home",
      company: "The Company Torry Harris Business Solutions (THBS), founded in 1998, is headquartered in New Jersey, USA. The company is a trusted advisor to enterprises worldwide, helping them extend the power of digital access through integration.",
      decription: " 1. Work on CAD fashion designing (we will provide fabric pictures, and brainstorm ideas to present, 2. Help post the ready CAD sketch and fabric pictures",
      skills: "Adobe Photoshop, Adobe Photoshop Lightroom CC, CAD, Facebook Marketing, Instagram Marketing",
      listskills: "Learn Adobe Photoshop, Learn Facebook Marketing",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 4 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Informal dress code,Job offer",
      openings: "3"
    },

    {
      id: 17,
      title: "NGO",
      sub: "CAPGEMIN",
      startdate: "Immediately",
      duration: "7-months",
      stipend: "$9000/month",
      location: "Chennai",
      apply: "ASAP",
      type: "Work from office",
      company: "Capgemini is a global leader in consulting, digital transformation, technology and engineering services.",
      decription: " Childo Education Research and Development Foundation is a nonprofit organization(Section-8 company) committed to providing quality education to everyone without any discrimination.Selected volunteer's day-to-day responsibilities include: 1. Running an online supporting fundraising campaign to raise funds, 2. Understanding the initiatives and spreading awareness",
      skills: "Communication",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 7 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation",
      openings: "5"
    },


    {
      id: 18,
      title: "Backend Development",
      sub: "WIPRO",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$8000/month",
      location: "Delhi",
      apply: "ASAP",
      link: "#",
      type: "work from home",
      company: "Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. Thierry Delaporte has served as CEO and managing director of Wipro since July 2020. It is headquartered in Bangalore, Karnataka, India.",
      decription: "Design and development of all server-side logic,Work on integration with databases, Coordinate with the rest of the team working on different layers of the infrastructure Integrate the front-end elements built by your co-workers into the application.",
      skills: "Node.js, Rust, SQL",
      listskills: "Learn SQL, Learn Node.JS, Learn Web Development, Learn Data Structures & Algorithms",
      whocanapply: "1. are available for the work from home job/internship, 2. can start the work from home job/internship immediately, 3. are available for duration of 3 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "5"
    },

    {
      id: 19,
      title: "Front End Development",
      sub: "SUN MOBILITY",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$3500/month",
      location: "Mumbai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      decription: "About the internship: Selected intern's day-to-day responsibilities include: 1. Manage accounts and contacts in Salesforce 2. Develop responsive email templates using HTML/CSS and JavaScript, 3. Create and manage bulk/on-demand emails sends in the marketing cloud, 4. Create and manage SMS campaigns with the mobile connect module, 5. Learn and use SOQL query language and AMPscript, 6. Gain working knowledge to manage customer journeys in Automation Studio, 7. Learn and apply advanced skills like Lightning Web components Apex and SOSL",
      company: "SUN Mobility is the leading provider of universal energy infrastructure and services to accelerate mass electric vehicle usage.",
      skills: "CSS,HTML,JavaScript",
      listskills: "Learn HTML, Learn CSS, Learn Node.JS using Javascript, Learn Software Testing using Javascript",
      whocanapply: "1. are available for full time office internship 2. can start the internship on Immediately. are available for duration of 4 months.  4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Job offer",
      openings: "2"
    },



    {
      id: 20,
      title: "Java Development",
      sub: "INFOSY",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$8000/month",
      location: "Delhi",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services. The company was founded in Pune and is headquartered in Bangalore",
      decription: " working on Spring MVC, JavaScript, J2EE, Servlet, HTML, MySql, SQL Server, and CSS.",
      skills: "Eclipse (IDE), Hibernate (Java),J2EE, Java, JSP, MySQL, Spring MVC",
      listskills: "Learn Java, Learn Voice App Development,Learn MySQL",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 4 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },


    {
      id: 21,
      title: "Humanities",
      sub: "THIS",
      startdate: "Immediately",
      duration: "7-months",
      stipend: "$7000/month",
      location: "Mumbai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      company: "The Company Torry Harris integration Solutions (THIS), founded in 1998, is headquartered in New Jersey, USA. The company is a trusted advisor to enterprises worldwide, helping them extend the power of digital access through integration. ",
      decription: "1. Conducting secondary research & literature review,  2. Conducting in-depth interviews over the telephone, 3. Assessing political dynamics",
      skills: "English Proficiency (Spoken), English Proficiency (Written), Google Suite (G Suite),MS-Office, Telugu Proficiency (Spoken)",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 7 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, 5 days a week",
      openings: "8"
    },



    {
      id: 22,
      title: "Front End Development",
      sub: "COGNIZANT",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$3500/month",
      location: "Hyderabad",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office",
      decription: "About the internship: Selected intern's day-to-day responsibilities include: 1. Manage accounts and contacts in Salesforce 2. Develop responsive email templates using HTML/CSS and JavaScript, 3. Create and manage bulk/on-demand emails sends in the marketing cloud, 4. Create and manage SMS campaigns with the mobile connect module, 5. Learn and use SOQL query language and AMPscript, 6. Gain working knowledge to manage customer journeys in Automation Studio, 7. Learn and apply advanced skills like Lightning Web components Apex and SOSL",
      company: "Cognizant is an American multinational information technology services and consulting company. It is headquartered in Teaneck, New Jersey, United States. Cognizant is part of the NASDAQ-100 and trades under CTSH.",
      skills: "CSS,HTML,JavaScript",
      listskills: "Learn HTML, Learn CSS, Learn Node.JS using Javascript, Learn Software Testing using Javascript",
      whocanapply: "1. are available for full time office internship 2. can start the internship on Immediately. are available for duration of 8 months.  4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Job offer",
      openings: "4"
    },

    {
      id: 23,
      title: "Java Development",
      sub: "IBM",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$8000/month",
      location: "Chennai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      company: "International Business Machines Corporation is an American multinational technology corporation headquartered in Armonk, New York, with operations in over 171 countries.",
      decription: " working on Spring MVC, JavaScript, J2EE, Servlet, HTML, MySql, SQL Server, and CSS.",
      skills: "Eclipse (IDE), Hibernate (Java),J2EE, Java, JSP, MySQL, Spring MVC",
      listskills: "Learn Java, Learn Voice App Development,Learn MySQL",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 6 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "9"
    },


    {
      id: 24,
      title: "CAD Design",
      sub: "HCL",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$5800/month",
      location: "Bangalore",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "HCL Technologies is an Indian multinational information technology services and consulting company headquartered in Noida. It is a subsidiary of HCL Enterprise. Originally a research and development division of HCL, it emerged as an independent company in 1991 when HCL entered into the software services business.",
      decription: " 1. Work on CAD fashion designing (we will provide fabric pictures, and brainstorm ideas to present, 2. Help post the ready CAD sketch and fabric pictures",
      skills: "Adobe Photoshop, Adobe Photoshop Lightroom CC, CAD, Facebook Marketing, Instagram Marketing",
      listskills: "Learn Adobe Photoshop, Learn Facebook Marketing",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 4 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Informal dress code,Job offer",
      openings: "3"
    },

    {
      id: 25,
      title: "Front End Development",
      sub: "TCS",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$3500/month",
      location: "Chennai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      decription: "About the internship: Selected intern's day-to-day responsibilities include: 1. Manage accounts and contacts in Salesforce 2. Develop responsive email templates using HTML/CSS and JavaScript, 3. Create and manage bulk/on-demand emails sends in the marketing cloud, 4. Create and manage SMS campaigns with the mobile connect module, 5. Learn and use SOQL query language and AMPscript, 6. Gain working knowledge to manage customer journeys in Automation Studio, 7. Learn and apply advanced skills like Lightning Web components Apex and SOSL",
      company: "Tata Consultancy Services is an Indian multinational information technology services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 149 locations across 46 countries.",
      skills: "CSS,HTML,JavaScript",
      listskills: "Learn HTML, Learn CSS, Learn Node.JS using Javascript, Learn Software Testing using Javascript",
      whocanapply: "1. are available for full time (in-office) internship 2. can start the internship on Immediately. are available for duration of 4 months.  4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Job offer",
      openings: "4"
    },


    {
      id: 26,
      title: "Backend Development",
      sub: "TCS",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$4000/month",
      location: "Mumbai",
      apply: "ASAP",
      link: "#",
      type: "work from office",
      company: "Tata Consultancy Services is an Indian multinational information technology services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 149 locations across 46 countries.",
      decription: "Design and development of all server-side logic,Work on integration with databases, Coordinate with the rest of the team working on different layers of the infrastructure Integrate the front-end elements built by your co-workers into the application.",
      skills: "Node.js, Rust, SQL",
      listskills: "Learn SQL, Learn Node.JS, Learn Web Development, Learn Data Structures & Algorithms",
      whocanapply: "1. are available for the work from office job/internship, 2. can start the work from office job/internship immediately, 3. are available for duration of 3 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "5"
    },

    {
      id: 27,
      title: "CAD Design",
      sub: "TCS",
      startdate: "Immediately",
      duration: "9-months",
      stipend: "$9000/month",
      location: "Kolkata",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Tata Consultancy Services is an Indian multinational information technology services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 149 locations across 46 countries.",
      decription: " 1. Work on CAD fashion designing (we will provide fabric pictures, and brainstorm ideas to present, 2. Help post the ready CAD sketch and fabric pictures",
      skills: "Adobe Photoshop, Adobe Photoshop Lightroom CC, CAD, Facebook Marketing, Instagram Marketing",
      listskills: "Learn Adobe Photoshop, Learn Facebook Marketing",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 9 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Informal dress code,Job offer",
      openings: "3"
    },

    {
      id: 28,
      title: "Java Development",
      sub: "WIPRO",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$3000/month",
      location: "Mumbai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      company: "Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. Thierry Delaporte has served as CEO and managing director of Wipro since July 2020. It is headquartered in Bangalore, Karnataka, India.",
      decription: " working on Spring MVC, JavaScript, J2EE, Servlet, HTML, MySql, SQL Server, and CSS.",
      skills: "Eclipse (IDE), Hibernate (Java),J2EE, Java, JSP, MySQL, Spring MVC",
      listskills: "Learn Java, Learn Voice App Development,Learn MySQL",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 3 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },

    {
      id: 29,
      title: "Media",
      sub: "THIS",
      startdate: "Immediately",
      duration: "9-months",
      stipend: "$10000/month",
      location: "Mumbai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "The Company Torry Harris integration Solutions (THBS), founded in 1998, is headquartered in New Jersey, USA. The company is a trusted advisor to enterprises worldwide, helping them extend the power of digital access through integration.",
      decription: "1. Handle all digital marketing activities, 2. Create backlinks for our clients",
      skills: "Digital Marketing, Search Engine Marketing (SEM), Search Engine Optimization (SEO)",
      listskills: "Learn Search Engine Marketing, Learn SEO",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 9 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate,  Letter of recommendation,  Flexible work hours",
      openings: "4"
    },


    {
      id: 30,
      title: "CAD Design",
      sub: "IBM",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$5800/month",
      location: "Delhi",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "International Business Machines Corporation is an American multinational technology corporation headquartered in Armonk, New York, with operations in over 171 countries.",
      decription: " 1. Work on CAD fashion designing (we will provide fabric pictures, and brainstorm ideas to present, 2. Help post the ready CAD sketch and fabric pictures",
      skills: "Adobe Photoshop, Adobe Photoshop Lightroom CC, CAD, Facebook Marketing, Instagram Marketing",
      listskills: "Learn Adobe Photoshop, Learn Facebook Marketing",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 4 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Informal dress code,Job offer",
      openings: "8"
    },


    {
      id: 31,
      title: "Java Development",
      sub: "TECH MAHINDRA ",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$8000/month",
      location: "Hyderabad",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      company: "Tech Mahindra is an Indian multinational information technology services and consulting company. Part of the Mahindra Group, the company is headquartered in Pune and has its registered office in Mumbai. Tech Mahindra is a US$5.2 billion company with over 145,000 employees across 90 countries.",
      decription: " working on Spring MVC, JavaScript, J2EE, Servlet, HTML, MySql, SQL Server, and CSS.",
      skills: "Eclipse (IDE), Hibernate (Java),J2EE, Java, JSP, MySQL, Spring MVC",
      listskills: "Learn Java, Learn Voice App Development,Learn MySQL",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 6 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },




    {
      id: 32,
      title: "CAD Design",
      sub: "ORACLE",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$9800/month",
      location: "Hyderabad",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas. In 2020, Oracle was the second-largest software company in the world by revenue and market capitalization.",
      decription: " 1. Work on CAD fashion designing (we will provide fabric pictures, and brainstorm ideas to present, 2. Help post the ready CAD sketch and fabric pictures",
      skills: "Adobe Photoshop, Adobe Photoshop Lightroom CC, CAD, Facebook Marketing, Instagram Marketing",
      listskills: "Learn Adobe Photoshop, Learn Facebook Marketing",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 3 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Informal dress code,Job offer",
      openings: "3"
    },

    {
      id: 33,
      title: "MBA",
      sub: "DQS INDIA",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$4500/month",
      location: "Bangalore",
      apply: "ASAP",
       type: "work from office",
      company: "DQS Certification is a premium Consulting and Assessment agency and has experienced professional Consultants for executing CMMI Deliveries based on the DQS ... ",
      decription: "1. Prepare, compile and sort documents/videos/post for data entry,2. Check source documents for accuracy 3. Verify data and correct data where necessary, 4. Obtain further information for incomplete documents/videos/posts, 5. Update data and delete unnecessary files, 6. Combine and rearrange data from source documents where required 7. Enter data from source prescribed computer database, files, and forms",
      skills: "BIG DATA ANALYTICS, Canva, Data Analytics,Data Structures, English Proficiency (Spoken), English Proficiency (Written),Google Analytics, Google Workspace, Hindi Proficiency (Written),MS-Excel,MS-Office,MS-PowerPoint,MS-Word",
      listskills: "Learn Google Analytics, Learn Data Structures,Learn Data Analytics,Learn MS-Excel,Learn Business Communication",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 8 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },



    {
      id: 34,
      title: "Medicine",
      sub: "THBS",
      startdate: "Immediately",
      duration: "2-months",
      stipend: "$6000/month",
      location: "Kolkata",
      apply: "ASAP",
    type: "work from office",
      company: "The Company Torry Harris Business Solutions (THBS), founded in 1998, is headquartered in New Jersey, USA. The company is a trusted advisor to enterprises worldwide, helping them extend the power of digital access through integration.",
      decription: "1. Conducting in-depth research on medical topics in order to develop original content, 2. Developing content for social media, based on editorial guidelines and reliable medical sources 3. Ensuring the content is written in flawless English,4. Ensuring the content is 100% medically accurate and comprehensive, 5. Proofreading content for errors and inconsistencies, 6. Editing and polishing content to improve readability, relatability, and understanding, 7. Conducting keyword research and using SEO best practices to increase traffic, 8. Evaluating analytics to adjust content as needed, 9 Creating compelling headlines and body copy that will capture the attention of the target audience, 10. Identifying the audience's needs and recommending new content, 11. Contributing to the development of content strategies that will increase customers, followers, and engagement",
      skills: "Creative Writing, Digital Marketing, Molecular Medicine, Research and Analytics, Search Engine Optimization (SEO), Social Media Marketing",
      listskills: "Learn Social Media Marketing, Learn SEO, Learn Creative Writing, Learn Research and Analytics",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 2 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },

    {
      id: 35,
      title: "MBA",
      sub: "ORACLE",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$4500/month",
      location: "Chennai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas. In 2020, Oracle was the second-largest software company in the world by revenue and market capitalization.",
      skills: "BIG DATA ANALYTICS, Canva, Data Analytics,Data Structures, English Proficiency (Spoken), English Proficiency (Written),Google Analytics, Google Workspace, Hindi Proficiency (Written),MS-Excel,MS-Office,MS-PowerPoint,MS-Word",
      listskills: "Learn Google Analytics, Learn Data Structures,Learn Data Analytics,Learn MS-Excel,Learn Business Communication",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 8 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },



    {
      id: 36,
      title: "Medicine",
      sub: "CAPGEMIN",
      startdate: "Immediately",
      duration: "11-months",
      stipend: "$6000/month",
      location: "Bangalore",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Capgemini is a global leader in consulting, digital transformation, technology and engineering services.",
      decription: "1. Conducting in-depth research on medical topics in order to develop original content, 2. Developing content for social media, based on editorial guidelines and reliable medical sources 3. Ensuring the content is written in flawless English,4. Ensuring the content is 100% medically accurate and comprehensive, 5. Proofreading content for errors and inconsistencies, 6. Editing and polishing content to improve readability, relatability, and understanding, 7. Conducting keyword research and using SEO best practices to increase traffic, 8. Evaluating analytics to adjust content as needed, 9 Creating compelling headlines and body copy that will capture the attention of the target audience, 10. Identifying the audience's needs and recommending new content, 11. Contributing to the development of content strategies that will increase customers, followers, and engagement",
      skills: "Creative Writing, Digital Marketing, Molecular Medicine, Research and Analytics, Search Engine Optimization (SEO), Social Media Marketing",
      listskills: "Learn Social Media Marketing, Learn SEO, Learn Creative Writing, Learn Research and Analytics",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 11 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },

    {
      id: 37,
      title: "Backend Development",
      sub: "IBM",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$6000/month",
      location: "Chennai",
      apply: "ASAP",
      link: "#",
      type: "work from home",
      company: "International Business Machines Corporation is an American multinational technology corporation headquartered in Armonk, New York, with operations in over 171 countries..",
      decription: "Design and development of all server-side logic,Work on integration with databases, Coordinate with the rest of the team working on different layers of the infrastructure Integrate the front-end elements built by your co-workers into the application.",
      skills: "Node.js, Rust, SQL",
      listskills: "Learn SQL, Learn Node.JS, Learn Web Development, Learn Data Structures & Algorithms",
      whocanapply: "1. are available for the work from home job/internship, 2. can start the work from home job/internship immediately, 3. are available for duration of 3 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "5"
    },



    {
      id: 38,
      title: "Medicine",
      sub: "HCL",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$6000/month",
      location: "Delhi",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office",
      company: "HCL Technologies is an Indian multinational information technology services and consulting company headquartered in Noida. It is a subsidiary of HCL Enterprise. Originally a research and development division of HCL, it emerged as an independent company in 1991 when HCL entered into the software services business.",
      decription: "1. Conducting in-depth research on medical topics in order to develop original content, 2. Developing content for social media, based on editorial guidelines and reliable medical sources 3. Ensuring the content is written in flawless English,4. Ensuring the content is 100% medically accurate and comprehensive, 5. Proofreading content for errors and inconsistencies, 6. Editing and polishing content to improve readability, relatability, and understanding, 7. Conducting keyword research and using SEO best practices to increase traffic, 8. Evaluating analytics to adjust content as needed, 9 Creating compelling headlines and body copy that will capture the attention of the target audience, 10. Identifying the audience's needs and recommending new content, 11. Contributing to the development of content strategies that will increase customers, followers, and engagement",
      skills: "Creative Writing, Digital Marketing, Molecular Medicine, Research and Analytics, Search Engine Optimization (SEO), Social Media Marketing",
      listskills: "Learn Social Media Marketing, Learn SEO, Learn Creative Writing, Learn Research and Analytics",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 6 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },

    {
      id: 39,
      title: "NGO",
      sub: "TCS",
      startdate: "Kolkata",
      duration: "8-months",
      stipend: "$7000/month",
      location: "Bangalore",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      company: "Tata Consultancy Services is an Indian multinational information technology services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 149 locations across 46 countries.",
      decription: " Childo Education Research and Development Foundation is a nonprofit organization(Section-8 company) committed to providing quality education to everyone without any discrimination.Selected volunteer's day-to-day responsibilities include: 1. Running an online supporting fundraising campaign to raise funds, 2. Understanding the initiatives and spreading awareness",
      skills: "Communication",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 8 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation",
      openings: "11"
    },

    {
      id: 40,
      title: "MBA",
      sub: "ACCENTURE",
      startdate: "Immediately",
      duration: "9-months",
      stipend: "$5500/month",
      location: "Delhi",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: " Accenture plc is an Ireland-based multinational professional services company that specialises in information technology services and consulting. A Fortune Global 500 company, it reported revenues of $50.53 billion in 2021.",
      decription: "1. Prepare, compile and sort documents/videos/post for data entry,2. Check source documents for accuracy 3. Verify data and correct data where necessary, 4. Obtain further information for incomplete documents/videos/posts, 5. Update data and delete unnecessary files, 6. Combine and rearrange data from source documents where required 7. Enter data from source prescribed computer database, files, and forms",
      skills: "BIG DATA ANALYTICS, Canva, Data Analytics,Data Structures, English Proficiency (Spoken), English Proficiency (Written),Google Analytics, Google Workspace, Hindi Proficiency (Written),MS-Excel,MS-Office,MS-PowerPoint,MS-Word",
      listskills: "Learn Google Analytics, Learn Data Structures,Learn Data Analytics,Learn MS-Excel,Learn Business Communication",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 9 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },



    {
      id: 41,
      title: "Medicine",
      sub: "TCS",
      startdate: "Immediately",
      duration: "11-months",
      stipend: "$6000/month",
      location: "Chennai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      company: "Tata Consultancy Services is an Indian multinational information technology services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 149 locations across 46 countries.",
      decription: "1. Conducting in-depth research on medical topics in order to develop original content, 2. Developing content for social media, based on editorial guidelines and reliable medical sources 3. Ensuring the content is written in flawless English,4. Ensuring the content is 100% medically accurate and comprehensive, 5. Proofreading content for errors and inconsistencies, 6. Editing and polishing content to improve readability, relatability, and understanding, 7. Conducting keyword research and using SEO best practices to increase traffic, 8. Evaluating analytics to adjust content as needed, 9 Creating compelling headlines and body copy that will capture the attention of the target audience, 10. Identifying the audience's needs and recommending new content, 11. Contributing to the development of content strategies that will increase customers, followers, and engagement",
      skills: "Creative Writing, Digital Marketing, Molecular Medicine, Research and Analytics, Search Engine Optimization (SEO), Social Media Marketing",
      listskills: "Learn Social Media Marketing, Learn SEO, Learn Creative Writing, Learn Research and Analytics",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 11 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },



    {
      id: 42,
      title: "NGO",
      sub: "EUPRIME",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$9000/month",
      location: "Bangalore",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Euprime's AI powered platform uses one of the world's best contactless health monitoring technology.",
      decription: " Childo Education Research and Development Foundation is a nonprofit organization(Section-8 company) committed to providing quality education to everyone without any discrimination.Selected volunteer's day-to-day responsibilities include: 1. Running an online supporting fundraising campaign to raise funds, 2. Understanding the initiatives and spreading awareness",
      skills: "Communication",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 8 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation",
      openings: "11"
    },

    {
      id: 43,
      title: "Medicine",
      sub: "HP",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$7000/month",
      location: "Hyderabad",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "HP Inc. is an American multinational information technology company headquartered in Palo Alto, California, that develops personal computers, printers and related supplies, as well as 3D printing solutions.",
      decription: "1. Conducting in-depth research on medical topics in order to develop original content, 2. Developing content for social media, based on editorial guidelines and reliable medical sources 3. Ensuring the content is written in flawless English,4. Ensuring the content is 100% medically accurate and comprehensive, 5. Proofreading content for errors and inconsistencies, 6. Editing and polishing content to improve readability, relatability, and understanding, 7. Conducting keyword research and using SEO best practices to increase traffic, 8. Evaluating analytics to adjust content as needed, 9 Creating compelling headlines and body copy that will capture the attention of the target audience, 10. Identifying the audience's needs and recommending new content, 11. Contributing to the development of content strategies that will increase customers, followers, and engagement",
      skills: "Creative Writing, Digital Marketing, Molecular Medicine, Research and Analytics, Search Engine Optimization (SEO), Social Media Marketing",
      listskills: "Learn Social Media Marketing, Learn SEO, Learn Creative Writing, Learn Research and Analytics",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 6 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },

    {
      id: 44,
      title: "Humanities",
      sub: "TCS",
      startdate: "Immediately",
      duration: "9-months",
      stipend: "$10000/month",
      location: "Chennai",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Tata Consultancy Services is an Indian multinational information technology services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 149 locations across 46 countries. ",
      decription: "1. Conducting secondary research & literature review,  2. Conducting in-depth interviews over the telephone, 3. Assessing political dynamics",
      skills: "English Proficiency (Spoken), English Proficiency (Written), Google Suite (G Suite),MS-Office, Telugu Proficiency (Spoken)",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 9 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, 5 days a week",
      openings: "8"
    },

    {
      id: 45,
      title: "NGO",
      sub: "INFOSYS",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$8000/month",
      location: "Bangalore",
      apply: "ASAP",
     // decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services. The company was founded in Pune and is headquartered in Bangalore",
      decription: " Childo Education Research and Development Foundation is a nonprofit organization(Section-8 company) committed to providing quality education to everyone without any discrimination.Selected volunteer's day-to-day responsibilities include: 1. Running an online supporting fundraising campaign to raise funds, 2. Understanding the initiatives and spreading awareness",
      skills: "Communication",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from homeinternship immediately, 3. are available for duration of 3 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation",
      openings: "11"
    },

    {
      id: 46,
      title: "MBA",
      sub: "COGNIZANT",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$8500/month",
      location: "Hyderabad",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      company: "Cognizant is an American multinational information technology services and consulting company. It is headquartered in Teaneck, New Jersey, United States. Cognizant is part of the NASDAQ-100 and trades under CTSH",
      decription: "1. Prepare, compile and sort documents/videos/post for data entry,2. Check source documents for accuracy 3. Verify data and correct data where necessary, 4. Obtain further information for incomplete documents/videos/posts, 5. Update data and delete unnecessary files, 6. Combine and rearrange data from source documents where required 7. Enter data from source prescribed computer database, files, and forms",
      skills: "BIG DATA ANALYTICS, Canva, Data Analytics,Data Structures, English Proficiency (Spoken), English Proficiency (Written),Google Analytics, Google Workspace, Hindi Proficiency (Written),MS-Excel,MS-Office,MS-PowerPoint,MS-Word",
      listskills: "Learn Google Analytics, Learn Data Structures,Learn Data Analytics,Learn MS-Excel,Learn Business Communication",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 8 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "8"
    },



    {
      id: 47,
      title: "NGO",
      sub: "THBS",
      startdate: "Immediately",
      duration: "10-months",
      stipend: "$8000/month",
      location: "Delhi",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "The Company Torry Harris Business Solutions (THBS), founded in 1998, is headquartered in New Jersey, USA. The company is a trusted advisor to enterprises worldwide, helping them extend the power of digital access through integration.",
      decription: " Childo Education Research and Development Foundation is a nonprofit organization(Section-8 company) committed to providing quality education to everyone without any discrimination.Selected volunteer's day-to-day responsibilities include: 1. Running an online supporting fundraising campaign to raise funds, 2. Understanding the initiatives and spreading awareness",
      skills: "Communication",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 10 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation",
      openings: "11"
    },

    {
      id: 48,
      title: "Humanities",
      sub: "CAPGEMINI",
      startdate: "Immediately",
      duration: "6-months",
      stipend: "$5000/month",
      location: "Delhi",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Capgemini is a global leader in consulting, digital transformation, technology and engineering services      ",
      decription: "1. Conducting secondary research & literature review,  2. Conducting in-depth interviews over the telephone, 3. Assessing political dynamics",
      skills: "English Proficiency (Spoken), English Proficiency (Written), Google Suite (G Suite),MS-Office, Telugu Proficiency (Spoken)",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 8 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, 5 days a week",
      openings: "8"
    },


    {
      id: 49,
      title: "Media",
      sub: "WIPRO",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$7000/month",
      location: "Kolkata",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "Wipro Limited is an Indian multinational corporation that provides information technology, consulting and business process services. Thierry Delaporte has served as CEO and managing director of Wipro since July 2020. It is headquartered in Bangalore, Karnataka, India. ",
      decription: "1. Handle all digital marketing activities, 2. Create backlinks for our clients",
      skills: "Digital Marketing, Search Engine Marketing (SEM), Search Engine Optimization (SEO)",
      listskills: "Learn Search Engine Marketing, Learn SEO",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 3 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate,  Letter of recommendation,  Flexible work hours",
      openings: "4"
    },



    {
      id: 50,
      title: "Humanities",
      sub: "MAGAMONEY CARTS PRIVATE LIMITED",
      startdate: "Immediately",
      duration: "8-months",
      stipend: "$6000/month",
      location: "Bangalore",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office",
      company: "Megamoney Carts Private Limited is a Private incorporated on 27 November 2020. It is classified as Non-govt company and is registered at Registrar of Companies, Pune. Its authorized share capital is Rs. 100,000 and its paid up capital is Rs. 25,000. It is inolved in Other computer related activities [for example maintenance of websites of other firms/ creation of multimedia presentations for other firms etc. ",
      decription: "1. Conducting secondary research & literature review,  2. Conducting in-depth interviews over the telephone, 3. Assessing political dynamics",
      skills: "English Proficiency (Spoken), English Proficiency (Written), Google Suite (G Suite),MS-Office, Telugu Proficiency (Spoken)",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 8 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, 5 days a week",
      openings: "8"
    },

    {
      id: 51,
      title: "Media",
      sub: "COGNIZANT",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$8000/month",
      location: "Hyderabad",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "Work from office",
      company: "Tata Consultancy Services is an Indian multinational information technology services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 149 locations across 46 countries.",
      decription: "1. Handle all digital marketing activities, 2. Create backlinks for our clients",
      skills: "Digital Marketing, Search Engine Marketing (SEM), Search Engine Optimization (SEO)",
      listskills: "Learn Search Engine Marketing, Learn SEO",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 4 months, 4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate,  Letter of recommendation,  Flexible work hours",
      openings: "4"
    },

    {
      id: 52,
      title: "Humanities",
      sub: "HEXAWARE",
      startdate: "Immediately",
      duration: "4-months",
      stipend: "$4000/month",
      location: "Kolkata",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from home",
      company: "We transform how IT services are delivered; and are on our journey to be the first IT services company in the world where half the workforce is digital. ",
      decription: "1. Conducting secondary research & literature review,  2. Conducting in-depth interviews over the telephone, 3. Assessing political dynamics",
      skills: "English Proficiency (Spoken), English Proficiency (Written), Google Suite (G Suite),MS-Office, Telugu Proficiency (Spoken)",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from home internship, 2. can start the work from home internship immediately, 3. are available for duration of 4 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, 5 days a week",
      openings: "8"
    },

    {
      id: 53,
      title: "Backend Development",
      sub: "ORACLE",
      startdate: "Immediately",
      duration: "3-months",
      stipend: "$5000/month",
      location: "Hyderabad",
      apply: "ASAP",
      link: "#",
      type: "work from home",
      company: "Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas. In 2020, Oracle was the second-largest software company in the world by revenue and market capitalization.",
      decription: "Design and development of all server-side logic,Work on integration with databases, Coordinate with the rest of the team working on different layers of the infrastructure Integrate the front-end elements built by your co-workers into the application.",
      skills: "Node.js, Rust, SQL",
      listskills: "Learn SQL, Learn Node.JS, Learn Web Development, Learn Data Structures & Algorithms",
      whocanapply: "1. are available for the work from home job/internship, 2. can start the work from home job/internship immediately, 3. are available for duration of 3 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, Flexible work hours, 5 days a week",
      openings: "5"
    },



    {
      id: 54,
      title: "Humanities",
      sub: "ORACLE",
      startdate: "Immediately",
      duration: "2-months",
      stipend: "$5000/month",
      location: "Hyderabad",
      apply: "ASAP",
      //decription: "Stipend structure: This is a performance-based internship. In addition to the minimum-assured stipend, you will also be paid a performance-linked incentive (10% of total funds raised).",
      type: "work from office",
      company: "Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas. In 2020, Oracle was the second-largest software company in the world by revenue and market capitalization. ",
      decription: "1. Conducting secondary research & literature review,  2. Conducting in-depth interviews over the telephone, 3. Assessing political dynamics",
      skills: "English Proficiency (Spoken), English Proficiency (Written), Google Suite (G Suite),MS-Office, Telugu Proficiency (Spoken)",
      listskills: "Learn Business Communication",
      whocanapply: "1. are available for the work from office internship, 2. can start the work from office internship immediately, 3. are available for duration of 2 months,4. have relevant skills and interests * Women wanting to start/restart their career can also apply.",
      perks: "Certificate, Letter of recommendation, 5 days a week",
      openings: "8"
    }

  ]
}
