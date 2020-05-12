import { DRINK_COFFEE } from '../actions/moodActions';

const initialState = { 
  coffees: 0,
  snacks: 0,
  naps: 0,
  study: 0 
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    
  }

}
