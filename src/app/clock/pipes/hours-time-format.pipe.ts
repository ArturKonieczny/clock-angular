import { Pipe, PipeTransform } from '@angular/core';

import { TimeFormat } from '../models/clock.interfaces';
import { HOURS_COUNT } from '../../app.interfaces';

@Pipe({
  name: 'hoursTimeFormat'
})
export class HoursTimeFormatPipe implements PipeTransform {
  transform(value: number, format: TimeFormat): number {
    if (format === '24h') {
      return value;
    }

    return value > HOURS_COUNT ? value - HOURS_COUNT : value;
  }
}
