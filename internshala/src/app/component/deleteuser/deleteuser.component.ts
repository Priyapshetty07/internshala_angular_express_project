import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  myform: FormGroup = new FormGroup({
    paswd: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)])
  });
  userMessage: string = '';
  loading = false;
  submitted = false;
  returnUrl?: string;
  email=localStorage.getItem('email');
  
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private myuser:  UserService,
    private dialogRef: MatDialogRef<DeleteuserComponent>,
    private userservice:UserService

  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
     
      paswd: ['', Validators.required]
    });
  }
  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // this.loading = false;

    this.userservice.deleteUser().subscribe((data=>{
      console.log(data)
    }))

    
  }
  get f() { return this.loginForm.controls; }
}
