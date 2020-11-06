import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor() { }
  
  
  imgticket=[
    {'img':"assets/images/ticket.jpg"}
  ]
  informationTitle='Information';
  informationDescription='There is no single festive occasion that goes unnoticed by brands wherein they go all out in crafting various creative posts and videos for latching onto the aesthetic opportunity and play around it. From Amul to Mother Dairy to Big Bazaar, brands have poured in their wishes creatively on social media celebrating BalGopal’s birthday with a few of them also cashing in on ‘exclusive day offers’ for their consumers.';
  ngOnInit(): void {
   }

}
