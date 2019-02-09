import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AnalogClockComponent } from './components/analog-clock/analog-clock.component';
import { ClockContainerComponent } from './containers/clock-container/clock-container.component';
import { ClockRouting } from './clock.routing';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { HoursTimeFormatPipe } from './pipes/hours-time-format.pipe';
import { MakeDigitsPipe } from './pipes/make-digits.pipe';
import { AnalogAnglePipe } from './pipes/analog-angle.pipe';
import { WeekdaysPipe } from './pipes/weekdays.pipe';
import { DateComponent } from './components/date/date.component';

@NgModule({
  declarations: [
    ClockContainerComponent,
    DigitalClockComponent,
    AnalogClockComponent,
    HoursTimeFormatPipe,
    MakeDigitsPipe,
    AnalogAnglePipe,
    WeekdaysPipe,
    DateComponent,
  ],
  imports: [
    ClockRouting,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ClockModule { }
