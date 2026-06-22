import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DI2Service } from '../di-2.service';

@Component({
  selector: 'app-di-2',
  imports: [],
  templateUrl: './di-2.html',
  styleUrl: './di-2.css',
})
export class Di2 {
  @Input({
    required: true,
    alias: 'userName',
  })
    name!: string;



  @Output()
  userData = new EventEmitter<any>()


  updateData() {

    console.log("hello");
    
    this.userData.emit({
      name : 'Prasanth'
    })
  }


  service = inject(DI2Service);
  constructor() {
    this.service.call();
  }
}
