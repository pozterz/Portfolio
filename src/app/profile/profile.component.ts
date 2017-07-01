import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  age:number;

  ngOnInit() {
  	this.age = this.getAge('1994,02,02');
  }

  getAge(birthday) {
  	let now = new Date;
  	let bday = now.getFullYear() - new Date(birthday).getFullYear();
  	return bday;
  }

}
