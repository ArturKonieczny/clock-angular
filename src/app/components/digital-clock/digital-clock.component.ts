import { Component, OnInit, OnDestroy } from '@angular/core';
import { getTime } from '../../clockengine';

function make2Digits(input) {
  const digitToAdd = input < 10 ? '0' : '';

  return `${digitToAdd}${input}`;
}

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})

export class DigitalClockComponent implements OnInit {
  hours:string;
  minutes:string;
  seconds:string;
  ampm:string;
  timeFormat:string = '24h';
  intervalID:any;
  constructor() {}

  setTime() {
    const time = getTime();

    if (this.timeFormat !== '24h') {
      this.hours = make2Digits(time.hours > 12 ? time.hours - 12 : time.hours);
    } else {
      this.hours = make2Digits(time.hours);
    }

    this.minutes = make2Digits(time.minutes);
    this.seconds = make2Digits(time.seconds);
    this.ampm = time.ampm;
  }

  changeTimeFormat(event:any) {
    this.timeFormat = event.target.value;
    this.setTime();
  }

  ngOnInit() {
    this.setTime();
    this.intervalID = setInterval(() => {
      this.setTime();
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.intervalID);
  }
}
