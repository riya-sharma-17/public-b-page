import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent implements OnInit {

  constructor() { }

  imagesArray=[
    {'imageURL': 'assets/images/location.png' , 'discription':'FREE'},
    {'imageURL': 'assets/images/free.jpg' , 'discription':'18 October ,2020'},
    {'imageURL': 'assets/images/c.png' , 'discription':'Sumandara Banquet Hall Whitefield'}
  ]
  social=[
    {'link':'https://www.facebook.com/','image':'assets/images/fb.jpg'},
    {'link':'https://www.instagram.com/?hl=en','image':'assets/images/insta.jpg'},
    {'link':'https://twitter.com/?lang=en','image':'assets/images/twii.png'}

  ]
  ngOnInit(): void {
  }
}
