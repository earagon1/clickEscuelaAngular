import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizeWord'
})
export class NormalizeWordPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (args != null) {
      if (args === 'stringArray') {
        let ret = '';
        for (const word of value) {
          ret += word + ', ';
        }
        return ret;


      }
    }
    return null;
  }

}
