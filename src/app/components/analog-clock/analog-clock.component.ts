import { Component, OnInit } from '@angular/core';
import { getTime } from '../../clockengine';

function rotate(angle) {
  return {
    WebkitTransform: `rotate(${angle}deg)`,
    MozTransform: `rotate(${angle}deg)`,
    MsTransform: `rotate(${angle}deg)`,
    OTransform: `rotate(${angle}deg)`,
    Transform: `rotate(${angle}deg)`
  };
}

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {
  hours:any;
  minutes:any;
  seconds:any;
  intervalID:any;

  constructor() { }

  setTime() {
    const time = getTime();

    this.hours = rotate(time.ahours);
    this.minutes = rotate(time.aminutes);
    this.seconds = rotate(time.aseconds);
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
