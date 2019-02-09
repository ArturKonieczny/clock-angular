import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { DigitalClockComponent } from './digital-clock.component';
import { HoursTimeFormatPipe } from '../../pipes/hours-time-format.pipe';
import { MakeDigitsPipe } from '../../pipes/make-digits.pipe';

describe('DigitalClockComponent', () => {
  let component: DigitalClockComponent;
  let fixture: ComponentFixture<DigitalClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DigitalClockComponent,
        HoursTimeFormatPipe,
        MakeDigitsPipe,
      ],
      imports: [
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
