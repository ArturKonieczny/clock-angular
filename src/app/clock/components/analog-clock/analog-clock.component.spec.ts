import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogClockComponent } from './analog-clock.component';
import { AnalogAnglePipe } from '../../pipes/analog-angle.pipe';

describe('AnalogClockComponent', () => {
  let component: AnalogClockComponent;
  let fixture: ComponentFixture<AnalogClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AnalogClockComponent,
        AnalogAnglePipe,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
