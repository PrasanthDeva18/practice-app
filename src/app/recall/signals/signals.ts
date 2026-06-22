import { NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, signal, computed, effect, Injector, inject, untracked } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [NgIf, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  count = signal(0);


  colorStatus = 'error'



  injector = inject(Injector);

  constructor() {
    effect(() => {
      console.log(this.count());
    });

    // UNTRACKED IN SIGNALS

    effect(() => {
      console.log(
        'effect called',
        untracked(() => this.count()),
      );
    });

    this.runEffectOutside();

    effect(() => {
      console.log(this.taskData());
    });
  }

  runEffectOutside() {
    effect(
      () => {
        console.log('effect called outside', this.count());
      },
      { injector: this.injector },
    );
  }

  z = computed(() => {
    console.log('computed called');
    return this.count() * 2;
  });

  increment() {
    this.count.update((c) => c + 1); // Use set instead of update to directly set the value
  }

  decrement() {
    this.count.update((c) => c - 1); // Use set instead of update to directly set the value
  }

  taskData = signal<any[]>([]);

  editModeId!: number;

  stuObj = [
    {id : 1, name : 'Prasanth'},
    {id : 2, name : 'vennila'},
    {id : 3}
  ]

  addTodo(value: string) {
    console.log(value);

    this.taskData.update((val) => [...val, { id: val.length + 1, taskName: value }]);
  }

  editTodo(id: number) {
    this.editModeId = id;
  }

  saveUpdateTodo(id: number, value: any) {

    console.log(id, value);
    
    this.taskData.update((val) =>
      val.map((item) => 
        item.id === id ? { ...item, taskName: value } : item
      ),
    );

    this.editModeId = 0
  }

  deleteTodo(id: number) {
    this.taskData.update((val) => val.filter((i) => i.id !== id));
  }
}
