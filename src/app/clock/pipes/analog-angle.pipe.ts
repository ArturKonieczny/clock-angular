import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'analogAngle'
})
export class AnalogAnglePipe implements PipeTransform {
  transform(value: number): any {
    return {
      WebkitTransform: `rotate(${value}deg)`,
      MozTransform: `rotate(${value}deg)`,
      MsTransform: `rotate(${value}deg)`,
      OTransform: `rotate(${value}deg)`,
      Transform: `rotate(${value}deg)`
    };
  }
}
