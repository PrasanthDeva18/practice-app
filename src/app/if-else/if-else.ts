import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  imports: [],
  templateUrl: './if-else.html',
  styleUrl: './if-else.css',
})
export class IfElse {
  isShow: boolean = false;

  show() {
    this.isShow = true;
  }
  hide() {
    this.isShow = false;
  }

  hideAndShow() {
    this.isShow = !this.isShow;
  }
}
