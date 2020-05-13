import React from 'react';
import Controls from '../components/controls/Controls';
import { useDispatch, useSelector } from 'react-redux';
import Face from '../components/face/Face';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';
import { getFace } from '../selectors/moodSelector';
const Moods = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const face = getFace(state);

  const actionsArray = [
    { name: 'Drink Coffee', count: state.coffees, actionCreator: () => dispatch(drinkCoffee()) }, 
    { name: 'Eat Snack', count: state.snacks, actionCreator: () => dispatch(eatSnack()) }, 
    { name: 'Take Nap', count: state.naps, actionCreator: () => dispatch(takeNap()) }, 
    { name: 'Study', count: state.studies, actionCreator: () => dispatch(study()) 
    }];
 
  return (
    <>
      <Controls actions={actionsArray}/>
      <Face emoji={face} />
    </>
  );
};

export default Moods;
