import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (args != null) {
      if (args === 'first') {
        const val = value.charAt(0).toUpperCase();
        return val;

      }

      if (args === 'normalize') {
        const val = value.charAt(0).toUpperCase() + value.substring(1, value.length).toLowerCase();
        return val;
      }
    }
    return null;
  }

}
