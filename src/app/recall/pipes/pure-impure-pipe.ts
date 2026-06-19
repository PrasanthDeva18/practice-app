import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureImpure'
})



// Pure pipe runs on when value is changed
// impure pipes 
export class PureImpurePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
