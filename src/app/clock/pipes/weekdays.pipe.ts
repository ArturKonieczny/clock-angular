import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekdays'
})
export class WeekdaysPipe implements PipeTransform {
  private weekdaysDict = [
    'Sunday',
    'Monday',
    'Tuesday',
    'wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  transform(value: number): string {
    return this.weekdaysDict[value] ||  this.weekdaysDict[0];
  }
}
