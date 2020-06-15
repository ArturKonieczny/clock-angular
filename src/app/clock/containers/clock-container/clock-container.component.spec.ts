import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';

import { AnalogClockComponent } from '../../components/analog-clock/analog-clock.component';
import { ClockContainerComponent } from './clock-container.component';
import { DigitalClockComponent } from '../../components/digital-clock/digital-clock.component';
import { DateComponent } from '../../components/date/date.component';
import { reducers } from '../../../app.root.reducer';
import { AnalogAnglePipe } from '../../pipes/analog-angle.pipe';
import { HoursTimeFormatPipe } from '../../pipes/hours-time-format.pipe';
import { MakeDigitsPipe } from '../../pipes/make-digits.pipe';
import { WeekdaysPipe } from '../../pipes/weekdays.pipe';


describe('ClockContainerComponent', () => {
  let component: ClockContainerComponent;
  let fixture: ComponentFixture<ClockContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AnalogClockComponent,
        ClockContainerComponent,
        DigitalClockComponent,
        DateComponent,
        AnalogAnglePipe,
        HoursTimeFormatPipe,
        MakeDigitsPipe,
        WeekdaysPipe,
      ],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot(
          reducers,
          {
            runtimeChecks: {
              strictStateImmutability: true,
              strictActionImmutability: true
            },
          }
        ),
      ],
      providers: [
        Store,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
