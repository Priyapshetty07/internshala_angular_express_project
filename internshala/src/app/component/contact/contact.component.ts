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
      text1: 'visit Student Help Center',
      link: '#'
    },
    {
      title: 'Student - Trainings',
      text: 'For trainings related queries,',
      text1: 'visit Trainings Help Center',
      link: '#'

    },
    {
      title: 'Employers',
      text: 'For employer queries,',
      text1: 'visit Employer Help Center',
      link: '#'


    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
