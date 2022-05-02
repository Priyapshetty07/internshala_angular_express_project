import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  
  myform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required)
  });



  
  userlist:any;

  constructor(private myusersrv: UserService) { }

  ngOnInit(): void {
    this.myusersrv.getProfile().subscribe((result:any)=>{
      this.userlist=result;
      console.log(result);
      
    });
  }
  getValues(){
    console.log('hello');
  }
}

