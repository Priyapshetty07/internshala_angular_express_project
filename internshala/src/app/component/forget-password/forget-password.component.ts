import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  errmsg='';

  myform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    paswd: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    cpaswd: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
  });
  
  
  constructor(private userSerivice:UserService,private router:Router) { }

  ngOnInit(): void {
  }
getValues(){

if(this.myform.valid)
{
  this.userSerivice.forgetDeatils(this.myform.value).subscribe((data)=>{
    console.log(data);
    alert("Suceesfully Reset password");
    this.myform.reset();
    this.router.navigate(['/home'])
    
  });
}
else{
  this.errmsg="please fill details correctly";
}
}
}
