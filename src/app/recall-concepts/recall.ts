import { Component, effect, signal, untracked, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppDemo } from './demo-2/demo';

@Component({
  templateUrl: './recall.html',
  styleUrl: './recall.css',
  imports: [RouterLink, AppDemo],
})
export class RecallComponent {
  @ViewChild(AppDemo)
  childAppDemo!: AppDemo;


  //signals
  a = signal(0);

  b = signal(1);

  userName = 'prasanth';

  constructor() {
    effect(() => {
      console.log(this.a());
      console.log(this.b());

      // untracked(() => {
      //   console.log(this.b());
      // });
    });
  }

  updateVal() {
    this.a.update((a) => a + 1);
    // this.b.update((a) => a + 1);
  }

  printVal(val: string) {
    console.log(val);
  }


  resetVal() {
    this.childAppDemo.setTo0()
  }
}
