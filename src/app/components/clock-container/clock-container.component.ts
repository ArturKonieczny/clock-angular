import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-container',
  templateUrl: './clock-container.component.html',
  styleUrls: ['./clock-container.component.scss']
})
export class ClockContainerComponent implements OnInit {
  clockType:string = 'digital';
  constructor() { }

  changeClockType(event) {
    this.clockType = event.target.value;
  }

  ngOnInit() {
  }
}