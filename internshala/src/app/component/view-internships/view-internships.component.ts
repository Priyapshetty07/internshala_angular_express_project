import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-view-internships',
  templateUrl: './view-internships.component.html',
  styleUrls: ['./view-internships.component.css']
})
export class ViewInternshipsComponent implements OnInit {
  desc:any="We are a technology company on a mission to equip students with relevant skills & practical exposure through internships and online training. Imagine a world full of freedom and possibilities. A worlwhere you can discover your passion and turn it into your career. A worldwhere your practical skills matter more than your university degree. A world where you do not have to wait till 21 to taste your first work experience (and get a rude shock that it is nothing like you had to imagine it to be). A world where you graduate fully assured, fully confident, and fully prepared to stake a claim on your place in the world.";
  enrollmsg:string='';
  enrollbtnflag:boolean=true;
  internship: any[] = [];
  constructor(public dialog: MatDialog,private route: ActivatedRoute, private userservice: UserService,private router:Router) {
    this.route.queryParams.subscribe(data => {
      for (let i = 0; i < this.userservice.internship.length; i++) {
        if (this.userservice.internship[i].id == data['internshipID']) {
          this.internship.push(this.userservice.internship[i]);
        }
      }
      console.log(this.internship);
    })
  }

  ngOnInit(): void {
  }

  enroll(id:any) {
    let user=false;
    if (localStorage.getItem('login') == 'true') {
      if(localStorage.getItem('internRegister')) {
        let logs=JSON.parse(localStorage.getItem('internRegister')|| '[]');
        for(let i=0;i<logs.length;i++) {
          if(logs[i].id==id
            && logs[i].email==localStorage.getItem('email')){
              user=true;
            } else{
              user=false;
            }
        }
      }
      if (user) {
        this.enrollmsg = 'user already enrolled to this internship,to enrol for other internships';
        this.enrollbtnflag = false;
      } else {
        this.enrollmsg = 'successfully enrolled  want to apply for other internship ';
        this.enrollbtnflag = false;
        let users:any=JSON.parse(localStorage.getItem('internRegister')|| '[]');
        users.push({ id: id, email: localStorage.getItem('email')})
        localStorage.setItem('internRegister',JSON.stringify(users));
        console.log("done");
      }
    } else {
      const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result=='success') {
        window.location.reload();
      }
    });
    }
  }
}