import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-employer',
  templateUrl: './register-employer.component.html',
  styleUrls: ['./register-employer.component.css']
})
export class RegisterEmployerComponent implements OnInit {

  myform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
  });

  card1 = [
    {
      title: '1. Register',
      text: 'Get started by creating',
      text1: 'your account',
      imagelink: 'https://internshala.com/static/images/registration/employer/registration_new/internship/illustrations/1_register.png'
    },
    {
      title: '2. Post',
      text: 'Post internships for any',
      text1: 'profile and location',
      imagelink: 'https://internshala.com/static/images/registration/employer/registration_new/internship/illustrations/2_post.png'
      

    },
    {
      title: '3. Hire',
      text: 'Screen and hire using',
      text1: 'our world class ATS',
      imagelink: 'https://internshala.com/static/images/registration/employer/registration_new/internship/illustrations/3_hire.png'


    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  getValues() {
    console.log(this.myform);
  }


}
