import { reducer, State, initialState } from './clock.reducer';
import * as actions from '../actions/clock.actions';

describe('Clock Reducer', () => {
  let defaultState: State;

  beforeEach(() => {
    defaultState = JSON.parse(JSON.stringify(initialState));
  });

  it('should return initial state if provided not listed action', () => {
    const initial = reducer(defaultState, { type: 'INVALID_ACTION', payload: {} });
    expect(initial).toBe(defaultState);
  });

  it('should return state with searchPending on SET_TIME action', () => {
    const time = {
      hours: 13,
      minutes: 12,
      seconds: 11,
    };

    const result = reducer(defaultState, new actions.SetTimeAction(time));

    expect(result).not.toBe(defaultState);
    expect(result.currentTime).toEqual(time);
  });

  it('should return state with searchPending on SET_DATE action', () => {
    const date = {
      day: 8,
      month: 2,
      year: 2012,
      weekDay: 5,
    };

    const result = reducer(defaultState, new actions.SetDateAction(date));

    expect(result).not.toBe(defaultState);
    expect(result.currentDate).toEqual(date);
  });
});
