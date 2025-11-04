import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile';
import { Counter } from './counter/counter';
import { Input } from './input/input';
import { IfElse } from './if-else/if-else';
import { SwitchCase } from './switch-case/switch-case';
import { ForLoop } from './for-loop/for-loop';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, ProfileComponent, Counter, Input, IfElse, SwitchCase, ForLoop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('learning-angular');

  a: number = 20;
  name: string = 'PRASANTH';

  temp = signal(10);

  constructor() {
    effect(() => {
      console.log(this.temp());
    });
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
