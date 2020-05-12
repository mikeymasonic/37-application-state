import { DRINK_COFFEE } from "./moodActions";


describe('mood actions', () => {
  it('creates a drink coffee action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({ type: DRINK_COFFEE});
  });

})