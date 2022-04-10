import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
 
  
  card1 = [
    {
      title: 'Trainings',
      text: 'Learn new-age skills on',
      text1: 'the go with our short-term online',
       text2: 'trainings',
       imglink: 'https://internshala.com/static/images/info/about_us/vision/trainings-r575.svg'
    },
    {
      title: 'Job-oriented specializations',
      text: 'Specialize in industry-oriented',
      text1:'programs that get you ready for',
       text2:'a career in your dream profile',
       imglink:'https://internshala.com/static/images/info/about_us/vision/jos-r575.svg'


    }
  ];

  card2 = [
    {
      title: 'Fresher jobs',
      text: 'Get premium fresher jobs with a',
      text1: 'minimum CTC of 3LPA on your',
       text2: 'fingertips',
       imglink: 'https://internshala.com/static/images/info/about_us/vision/jobs-r575.svg'
    },
    {
      title: 'Internships',
      text: 'Find 10,000+ internships from',
      text1:'great companies to give a',
       text2:'kickstart to your career',
       imglink:'https://internshala.com/static/images/info/about_us/vision/internships-r575.svg'


    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
