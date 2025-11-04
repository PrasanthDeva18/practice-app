import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrl: './for-loop.css',
})
export class ForLoop {
  item = ['Prasanth', 'Deva', 'Vennila'];

  arrObj = [
    {
      name: 'Prasanth',
      age: 20,
    },
    {
      name: 'Deva',
      age: 20,
    },
  ];

  triggeredBy(index: string) {
    console.log(index);
  }
}
