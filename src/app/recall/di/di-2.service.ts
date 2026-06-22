import { inject, Injectable } from '@angular/core';
import { DiService } from './di.service';

// @Injectable({
//   providedIn: 'root',
// })
export class DI2Service {
  addService = inject(DiService);

  call() {
    console.log("calling this add function", this.addService.add(5, 6))
    return this.addService.add(5, 6)

  }
}
