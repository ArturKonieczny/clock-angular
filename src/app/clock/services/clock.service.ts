import { Injectable } from '@angular/core';

import { CurrentDate, CurrentTime } from '../models/clock.interfaces';
import { HOURS_COUNT } from '../../app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  private SEC_MIN_ADJUST = 6;
  private HOURS_ADJUST = 30;
  private HOURS_MIN_ADJUST = 0.5;

  public getTime(): CurrentTime {
    const currentDate = new Date();

    return {
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    };
  }

  public getDate(): CurrentDate {
    const currentDate = new Date();

    return {
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
      weekDay: currentDate.getDay(),
    };
  }

  public convertToAnalog(time: CurrentTime) {
    const seconds = time.seconds * this.SEC_MIN_ADJUST;
    const minutes = time.minutes * this.SEC_MIN_ADJUST;
    const hours = this.HOURS_ADJUST * (time.hours % HOURS_COUNT) + time.minutes * this.HOURS_MIN_ADJUST;

    return { seconds, minutes, hours };
  }
}
