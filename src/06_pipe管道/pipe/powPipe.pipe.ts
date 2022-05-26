import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powPipe',
})
export class powPipe implements PipeTransform {
  transform(value: number, mes: string) {
    console.log(mes);
    return Math.pow(value, 2);
  }
}
