import {createStore} from '@reduxjs/toolkit';

export const INCREMENT = 'increment';
export const INCREASE = 'increase';
export const DECREMENT = 'decrement';
export const TOGGLE = 'toggle';

const initialState = {counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    // so here in reducer function we handle action type
    // we should dispatch one of this identifiers
    if(action.type === INCREMENT){
        //we are returning overall state object, redux won't merge your changes with existing state it instead takes what you return and replaces existing state with it.
        return{
            counter: state.counter+1,
            showCounter: state.showCounter
        };
    }


    if(action.type === INCREASE){
        return{
            counter: state.counter+action.amount, //the property you access here on action in Reducer has same name when you dispatch it.
            showCounter: state.showCounter
        };
    }

    //prepare our reducer for another action type
    // now reducer is dynamic (it extracts an action payload)

    if(action.type === DECREMENT){
        return{
            counter: state.counter-1,
            showCounter: state.showCounter
        };
    }
    if(action.type === TOGGLE){   //'toggle' it is an identifier
        return{
            showCounter:  !state.showCounter,
            counter: state.counter
        };
    }
    //thus we can manage different pieces of data(working with multiple state properties)
    return state;
};

const store = createStore(counterReducer);

export default store;
//now we have to provide redux store to react apps