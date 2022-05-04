import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  card1 = [
    {
      title: 'Student-Internships & Jobs',
      text: 'For internships and jobs related queries,',
    },
    {
      title: 'Student - Trainings',
      text: 'For trainings related queries,',
    },
    {
      title: 'Employers',
      text: 'For employer queries,',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
