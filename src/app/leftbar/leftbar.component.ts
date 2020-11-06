import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit {

  constructor() { }
  sidebarTitle:string="Event Details";
  navigationArray = [
    {'menulink': '#Information' , 'menuname':'Information'},
    {'menulink': '#Activities' , 'menuname':'Activities'},
    {'menulink': '#Gallary' , 'menuname':'Gallary'},
    {'menulink': '#Map' , 'menuname':'View on map'},
    {'menulink': '#TandC' , 'menuname':'Terms & Conditions'}
    
  ]

  ngOnInit(): void {
  }

}
