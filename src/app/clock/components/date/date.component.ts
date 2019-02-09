import { Component, Input } from '@angular/core';

import { CurrentDate } from '../../models/clock.interfaces';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
})
export class DateComponent {
  @Input() date: CurrentDate;
}
