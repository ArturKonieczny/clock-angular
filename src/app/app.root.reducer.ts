import { ActionReducerMap } from '@ngrx/store';

import * as fromClock from './clock/reducers/clock.reducer';

export interface State {
  clock: fromClock.State;
}

export const reducers: ActionReducerMap<State> = {
  clock: fromClock.reducer,
};
