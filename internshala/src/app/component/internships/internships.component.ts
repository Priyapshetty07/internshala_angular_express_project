import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {

  constructor() { }
internship=[{title:"infosys support intern",subtitle:"Graphic design",desc:"$500/month",location:"bangalore",link:"https://google.com"},
{title:"google internship",subtitle:"Web Development intern",desc:"$400/month",location:"shimoga",link:"https://google.com"},
{title:"jnnce internship",subtitle:"Java Developer intern",desc:"$800/month",location:"mumbai",link:"https://google.com"},
{title:"thbs internship",subtitle:"Python Developer intern",desc:"$100/month",location:"chennai",link:"https://google.com"}]
  ngOnInit(): void {
  }

}
