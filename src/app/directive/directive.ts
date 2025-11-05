import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [NgFor, NgIf],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
})
export class Directive {
  userArr = ['Prasanth', 'Deva'];
  userArrs = [
    {
      0: 'PRASANTH',
    },
  ];

  show = true;

  isLoggedIn = false;

  toggle() {
    this.show = !this.show;
  }
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
