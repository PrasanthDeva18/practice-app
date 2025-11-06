import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile';
import { Counter } from './counter/counter';
import { Input } from './input/input';
import { IfElse } from './if-else/if-else';
import { SwitchCase } from './switch-case/switch-case';
import { ForLoop } from './for-loop/for-loop';
import { Signals } from './signals/signals';
import { FormsModule } from '@angular/forms';
import { Directive } from './directive/directive';
import { NgFor } from '@angular/common';
import { Nav } from './nav/nav';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    Nav,
    // Login,
    // ProfileComponent,
    // Counter,
    // Input,
    // IfElse,
    // SwitchCase,
    // ForLoop,
    // Signals,
    FormsModule, //if we are using ngmodel must formmodule configure
    // Directive,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('learning-angular');

  a: number = 20;
  name: string = 'PRASANTH';

  temp = signal(10);

  nameVal = 'prasanth';

  //Data types in signal

  b1 = signal<string | number>(20);

  b2: WritableSignal<string | number> = signal(100);

  b3: Signal<number> = computed(() => 20);

  constructor() {
    effect(() => {
      console.log(this.temp());
    });
  }

  updateSignal() {
    this.b1.set('prasanth');
    this.b2.set('prasanth deva');
  }

  handleInc() {
    this.temp.set(this.temp() + 1);
  }

  save() {
    console.log('Save the data');
    this.print();
  }

  print() {
    console.log('Print the data');
  }

  clickToPrint(flag: boolean) {
    let str: string = 'not allowed';
    if (flag) {
      console.log(this.a + 20);
    } else {
      console.log(str);
    }
  }
}
