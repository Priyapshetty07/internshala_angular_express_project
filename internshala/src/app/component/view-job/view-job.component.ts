import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {
  enrollmsg: string = '';
  fileForm: FormGroup;
  inputText: FormControl;
  uploadmsg: string = '';
  enrollbtnflag: boolean = true;
  msgflag: boolean = false;
  resumerqrd: string = '';
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: boolean = false;
  registerForm: any = FormGroup;
  submitted = false;
  jobs: any[] = [];
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private userservice: UserService, public dialog: MatDialog) {
    this.route.queryParams.subscribe(data => {
      for (let i = 0; i < this.userservice.jobs.length; i++) {
        if (this.userservice.jobs[i].id == data['internshipID']) {
          this.jobs.push(this.userservice.jobs[i]);
        }
      }
      console.log(this.jobs);
    })
  }
  get f() { return this.registerForm.controls; }
  ngOnInit(): void {
    this.fileForm=new FormGroup({
      fileinput : new FormControl('', [Validators.required])
    })
    


  }
  upload() {
    this.file = true
    this.uploadmsg = 'file uploaded successfully';
  }

  enroll(id: any) {
    //let user=false;

    if (localStorage.getItem('login') == 'true') {
      if (this.fileForm.valid) {
        let user = {
          id: id.id, firstname: localStorage.getItem('firstname'), lastname: localStorage.getItem('lastname'),
          email: localStorage.getItem('email'), title: id.title, sub: id.sub, location: id.location
        }
        this.userservice.applytojobs(user).subscribe((data: any) => {
          let result = JSON.parse(data);
          if (result.message == 'user already exists') {
            this.enrollmsg = 'user already applied to this job,to apply for other jobs';
            this.enrollbtnflag = false;
            this.msgflag = false;
          } else {
            this.enrollmsg = 'successfully apply  want to apply for other jobs ';
            this.enrollbtnflag = false;
            this.msgflag = true;
          }
        })
      } else {
      }
    } else {
      const dialogRef = this.dialog.open(LoginComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (result == 'success') {
          let user = {
            id: id.id, firstname: localStorage.getItem('firstname'), lastname: localStorage.getItem('lastname'),
            email: localStorage.getItem('email'), title: id.title, sub: id.sub, location: id.location
          }
          this.userservice.applytojobs(user).subscribe((data: any) => {
            let result = JSON.parse(data);
            if (result.message == 'user already exists') {
              this.enrollmsg = 'user already applied to this job,to apply for other jobs';
              this.enrollbtnflag = false;
              this.msgflag = false;
            } else {
              this.enrollmsg = 'successfully apply  want to apply for other jobs ';
              this.enrollbtnflag = false;
              this.msgflag = true;
            }
          })
          this.fileForm.reset();
        }
      });
    }
  }
  
}
