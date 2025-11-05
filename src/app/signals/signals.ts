import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  // Signals are reactive in angular, normal data type will not reactive

  //Writable Signals can we update the value using set and update - set will replace the value, update will act as the

  //Computed Signals are readable , it will derived automatically

  //example

  //x =10 , y = 20, z= x+y then i update y = 40 z remains same

  // writable signal

  a: WritableSignal<string[]> = signal(['Prasanth doing this task', 'Vennila Working this task']);

  b = signal([
    {
      sname: 'prasanth',
      sfee: 200,
      class: 12,
    },
    {
      sname: 'vennila',
      class: 11,
      sfee: 200,
    },
  ]);

  tPendingFeeSchool = computed(() => this.b().reduce((sum, s) => sum + s.sfee, 0));

  constructor() {
    effect(() => {
      console.log('hii');
      console.log(this.b());
    });
  }

  addTodo(event: string) {
    // let todoVal = (event.target as HTMLInputElement).value;
    this.a.update((arr) => [...arr, event]);
  }

  removeTodo(index: number) {
    this.a.update((arr) => arr.filter((_, i) => i !== index));
  }

  addStudent(name: string, cls: string, fee: string) {
    this.b.update((val) => [...val, { sname: name, class: Number(cls), sfee: Number(fee) }]);
  }
}
