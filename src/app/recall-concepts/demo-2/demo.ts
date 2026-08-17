import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo-2',
  template: `
    {{ a }}

    <button>send data</button>
  `,
  styles: '',
})
export class AppDemo implements OnInit {
  a: number = 10;
  @Input('userName') user!: string;

  @Output() userData = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log(this.user);
  }

  passCtoP() {
    this.userData.emit({
      id: 'prasa',
    });
  }

  setTo0() {
    this.a = 0;
  }
}
