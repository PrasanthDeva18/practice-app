import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count: number = 0;

  inc() {
    this.count = this.count + 1;
  }

  reset() {
    this.count = 0;
  }

  dec() {
    this.count = this.count - 1;
  }
}
