import { DRINK_COFFEE, drinkCoffee, EAT_SNACK, eatSnack } from './moodActions';


describe('mood actions', () => {
  it('creates a drink coffee action', () => {
    const action = drinkCoffee();

    expect(action).toEqual({ type: DRINK_COFFEE });
  });

  it('creats a eat snack action', () => {
    const action = eatSnack();

    expect(action).toEqual({ type: EAT_SNACK });
  });

});
