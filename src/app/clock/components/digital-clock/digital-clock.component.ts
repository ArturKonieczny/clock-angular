import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CurrentTime } from '../../models/clock.interfaces';
import { HOURS_COUNT } from '../../../app.interfaces';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
})

export class DigitalClockComponent {
  public timeFormat = new FormControl('24h');
  public hoursCount = HOURS_COUNT;

  @Input() time: CurrentTime;
}
