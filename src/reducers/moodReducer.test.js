import reducer from './moodReducer';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';

describe('mood reducer', () => {
  it('handles DRINK_COFFEE', () => {
    const action = drinkCoffee();
    const initialState = { coffees: 0 };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ coffees: 1 });
  });

  it('handles EAT_SNACK', () => {
    const action = eatSnack();
    const initialState = { snacks: 2 };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ snacks: 3 });
  });

  it('handles TAKE_NAP', () => {
    const action = takeNap();
    const initialState = { naps: 311 };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ naps: 312 });
  });

  it('handles STUDY', () => {
    const action = study();
    const initialState = { studies: 314 };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({ studies: 315 });
  });
});
