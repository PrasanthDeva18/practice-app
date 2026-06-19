import { Pipe, PipeTransform } from '@angular/core';
import {
  UpperCasePipe,
  LowerCasePipe,
  TitleCasePipe,
  DatePipe,
  PercentPipe,
  JsonPipe,
  AsyncPipe,
  KeyValuePipe,
  SlicePipe,
} from '@angular/common';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  private upper = new UpperCasePipe();

  transform(value: string, ...args: unknown[]): unknown {
    return this.upper.transform(value.split('').reverse().join(''));
  }
}

@Pipe({
  name: 'transformlogic',
})
export class TransformPipe implements PipeTransform {
  private slice = new SlicePipe();

  transform(strArr: any[], ...args: unknown[]): unknown {
    return this.slice.transform(
      strArr.map((val) => val > 18 ? val : "Not available"),
      0,
      strArr.length,
    );
  }
}
