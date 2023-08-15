
import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = 
{ 
    countervalue: 0, showCounter: true
};
const state = {...initialCounterState}
//preparing slice of global state with createslice
//we create different slices in different files to make code maintainable
//every slice needs a name and identifier of that piece of state 
//reducers is object of all reducers this state slice needs, add methods in it

const counterSlice = createSlice({
    //createSlice will create unique identifiers for our differnt reducers
  name: 'counter',
  initialCounterState:state,
  reducers: {
    //every method receive latest state, this methods called by redux,they will receive current state
    //identify these different reducers and dispatch actions that target these different reducers
    increment(state){
       state.counter++;  //here not manipulate existing state because of using redux toolkit contains imgur which will detect code and clone the existing state.create new state object, keep all state which we're not editing and override the state which we are editing in an immutable way, so we still have immutable code
    },
    decrement(state){
        state.counter--;
    },
    increase(state,action){
        state.counter = state.counter + action.payload;  //that is name of property which hold any extra data you might be dispatching
    },
    toggleCounter(state){
        state.showCounter = !state.showCounter;
    },
   
  }
});
export const counterActions = counterSlice.actions;  

export default counterSlice.reducer;  //export only reducer part not entire counterSlice