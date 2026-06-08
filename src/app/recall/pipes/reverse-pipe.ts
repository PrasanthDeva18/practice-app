import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, TitleCasePipe, } from '@angular/common';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.split('').reverse().join('');
  }
}
