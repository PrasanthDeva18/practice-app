import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
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

  color = 'textgreen';

  bgColor = 'green'
}
