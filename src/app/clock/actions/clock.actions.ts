import { Action } from '@ngrx/store';

import { OptionalPayloadAction } from '../../app.interfaces';
import { CurrentDate, CurrentTime } from '../models/clock.interfaces';

export const UPDATE_TIME = '[Clock] Update Time';
export const SET_TIME = '[Clock] Set Time';
export const UPDATE_DATE = '[Clock] Update Date';
export const SET_DATE = '[Clock] Set Date';

export class UpdateTimeAction implements Action {
  type = UPDATE_TIME;
}

export class SetTimeAction implements OptionalPayloadAction {
  type = SET_TIME;

  constructor(public payload: CurrentTime) { }
}

export class UpdateDateAction implements Action {
  type = UPDATE_DATE;
}

export class SetDateAction implements OptionalPayloadAction {
  type = SET_DATE;

  constructor(public payload: CurrentDate) { }
}

export type Actions =
  UpdateTimeAction
  | SetTimeAction
  | UpdateDateAction
  | SetDateAction
  ;
