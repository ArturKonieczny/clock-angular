import { Action } from '@ngrx/store';

export interface OptionalPayloadAction extends Action {
  payload?: any;
}

export const HOURS_COUNT = 12;
