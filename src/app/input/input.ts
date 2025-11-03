import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  username: string = '';

  setUserInput(e: Event) {
    // this.username = (e.target as HTMLInputElement).value;
  }

  setUserName() {
    this.username = 'Prasanth';
  }

  getUserName(val: string) {
    this.username = val;
  }
}
