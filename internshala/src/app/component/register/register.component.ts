import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
errmsg='';
url:string='';
type='';
  myform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    paswd: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required)
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
  userlist: any;

  constructor(private myusersrv: UserService,public dialog: MatDialog,private route:Router,private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe((data)=>{
      if(data['type']=="enroll") {
        this.url=data['url'];
      }
    })
  }
  getValues() {
    // console.log('hello');
    if (this.myform.valid) {
      alert("successfully register")
      this.route.navigate([this.url]);
      this.myusersrv.registerDetails(this.myform.value).subscribe((data) => {
        console.log(data)
        this.myform.reset();
      })
    } else {
      this.errmsg="please enter all fields";
    }

  }

  login() {
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result=='success') {
        window.location.reload()
      }
    });
  }
}




