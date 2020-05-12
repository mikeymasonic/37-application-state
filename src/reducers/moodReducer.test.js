import reducer from './moodReducer';
import { drinkCoffee, eatSnack } from '../actions/moodActions';

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
});
