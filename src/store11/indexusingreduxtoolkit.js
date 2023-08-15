//create slice is powerful than create reducer
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {countervalue: 0, showCounter: true};
//preparing slice of global state with createslice
//we create different slices in different files to make code maintainable
//every slice needs a name and identifier of that piece of state 
//reducers is object of all reducers this state slice needs, add methods in it
const counterSlice = createSlice({
    //createSlice will create unique identifiers for our differnt reducers
  name: 'counter',
  initialCounterState,
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
    }

  }
});

const initialAuthState = {
    isAuthenticated: false
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})
//only one store with multiple reducers
// we need this identifiers which we assigned in this reducer map to drill into our specific state slices(here counter as a identifier)
const store = configureStore({ // configurestore merge all reducers in to one big reducer
    reducer:  { // this is how we can combine multiple slices and reducers
        counter: counterSlice.reducer, //individual reducers automatically merged together
        auth: authSlice.reducer
    }           //which is responsible for global state(create a map of reducers, set this as a value for main reducer )
});
//configuration object expected by configureStore 
// set reducer property in configuration object

export const counterActions = counterSlice.actions;       //create action objects when called therefore these methods are called action creators, they will create action objects
//const store = configureStore(counterSlice.reducer); get access to reducer setup in slice
//for big application we have multiple state slices
//configureStore it makes merging multiple reducers into one reducer
export const authActions = authSlice.actions;//expose authactions
export default store;
//now we have to provide redux store to react apps