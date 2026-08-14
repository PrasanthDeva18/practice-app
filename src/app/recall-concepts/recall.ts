import { Component, effect, signal, untracked } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  templateUrl: './recall.html',
  styleUrl: './recall.css',
  imports: [RouterLink],
})
export class RecallComponent {
  //signals

  a = signal(0);

  b = signal(1);

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
}
