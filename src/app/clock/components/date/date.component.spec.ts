import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';
import { WeekdaysPipe } from '../../pipes/weekdays.pipe';
import { MakeDigitsPipe } from '../../pipes/make-digits.pipe';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DateComponent,
        WeekdaysPipe,
        MakeDigitsPipe,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
