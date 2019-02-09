import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeDigits'
})
export class MakeDigitsPipe implements PipeTransform {
  transform(value: number, count: number = 2): string {
    let stringValue = String(value);

    while (stringValue.length < count) {
      stringValue = `0${stringValue}`;
    }

    return stringValue;
  }

}
