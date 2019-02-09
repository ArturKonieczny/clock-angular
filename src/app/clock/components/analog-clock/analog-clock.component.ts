import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { CurrentTime } from '../../models/clock.interfaces';
import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnChanges {
  public analogTime: CurrentTime;

  @Input() time: CurrentTime;

  constructor(
    private clockService: ClockService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.time) {
      this.analogTime = this.clockService.convertToAnalog(changes.time.currentValue);
    }
  }
}
