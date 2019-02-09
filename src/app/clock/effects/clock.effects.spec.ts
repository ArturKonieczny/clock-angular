import { ReplaySubject, Subject } from 'rxjs';
import { inject, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

import { ClockEffects } from './clock.effects';
import { ClockService } from '../services/clock.service';
import * as clockActions from '../actions/clock.actions';

import Spy = jasmine.Spy;

describe('Clock Effects', () => {
  let clockEffects: ClockEffects;
  let clockService: ClockService;
  let actions: Subject<any>;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: ClockService,
        useValue: {
          getTime: jasmine.createSpy('getTime'),
          getDate: jasmine.createSpy('getDate'),
        }
      },
      ClockEffects,
      provideMockActions(() => actions),
    ],
  }));

  beforeEach(inject([
     ClockEffects, ClockService,
    ],
    (_effects: ClockEffects, _clockService: ClockService) => {
      clockEffects = _effects;
      clockService = _clockService;
    }));

  beforeEach(() => {
    actions = new ReplaySubject(1);
  });

  describe('updateTime$', () => {
    it('should dispatch SetTimeAction', () => {
      let result = null;
      const time = {
        hours: 13,
        minutes: 12,
        seconds: 11,
      };

      actions.next(new clockActions.UpdateTimeAction());
      (clockService.getTime as Spy).and.returnValue(time);

      clockEffects.updateTime$.subscribe(_result => result = _result);

      expect(result).toEqual(new clockActions.SetTimeAction(time));
    });
  });

  describe('updateDate$', () => {
    it('should dispatch SetDateAction', () => {
      let result = null;
      const date = {
        day: 8,
        month: 2,
        year: 2012,
        weekDay: 5,
      };

      actions.next(new clockActions.UpdateDateAction());
      (clockService.getDate as Spy).and.returnValue(date);

      clockEffects.updateDate$.subscribe(_result => result = _result);

      expect(result).toEqual(new clockActions.SetDateAction(date));
    });
  });
});
