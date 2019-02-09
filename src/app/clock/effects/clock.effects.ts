import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as clockActions from '../actions/clock.actions';
import { ClockService } from '../services/clock.service';

@Injectable()
export class ClockEffects {

  @Effect()
  updateTime$: Observable<clockActions.Actions> = this.actions$.pipe(
    ofType(clockActions.UPDATE_TIME),
    map(() => {
      return new clockActions.SetTimeAction(this.clockService.getTime());
    }),
  );

  @Effect()
  updateDate$: Observable<clockActions.Actions> = this.actions$.pipe(
    ofType(clockActions.UPDATE_DATE),
    map(() => {
      return new clockActions.SetDateAction(this.clockService.getDate());
    }),
  );

  constructor(
    private actions$: Actions,
    private clockService: ClockService,
  ) { }
}
