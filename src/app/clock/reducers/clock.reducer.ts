import * as clockActions from '../actions/clock.actions';
import { CurrentDate, CurrentTime } from '../models/clock.interfaces';
import { OptionalPayloadAction } from '../../app.interfaces';

export interface State {
  currentTime: CurrentTime | null;
  currentDate: CurrentDate | null;
}

export const initialState: State = {
  currentTime: null,
  currentDate: null,
};


export function reducer(state = initialState, action: OptionalPayloadAction): State {
  switch (action.type) {

    case clockActions.SET_TIME:
      return {
        ...state,
        currentTime: (action as clockActions.SetTimeAction).payload,
      } as State;

    case clockActions.SET_DATE:
      return {
        ...state,
        currentDate: (action as clockActions.SetDateAction).payload,
      } as State;

    default:
      return state;
  }
}
