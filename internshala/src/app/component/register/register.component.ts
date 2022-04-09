import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myform: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(7)]),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  getValues() {
    console.log(this.myform);
  }

}
