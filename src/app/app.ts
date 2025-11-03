import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile';
import { Counter } from './counter/counter';
import { Input } from './input/input';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, ProfileComponent, Counter, Input],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('learning-angular');

  a: number = 20;
  name: string = 'PRASANTH';

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
