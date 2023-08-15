import classes from './Counter.module.css';
import { useSelector , useDispatch} from 'react-redux';//custom hook made by react reedux team thst allows us to automatically select a part of our state managed by the store
//connect function used as a wrapper around our class component to connect that class component to the store
import { INCREMENT,INCREASE,DECREMENT,TOGGLE } from '../store11/index';
const Counter = () => {
  const dispatch = useDispatch();
  //here dispatch function will dispatch an acton against our redux store
  const counter = useSelector(state => state.counter); //here get the state and drill into state to get counter and store in counter constant
  // a fucntion we pass in useselector()(which receives state managed by redux and return a part of state) that is used to determine which piece of data you want to extract from store
  //when you use useselector react-redux automaticallyset up subscription to redux store for this component.so component updated receive latest value automatically when data change in redux store.
  //slice is to get tiny part of that overall state object
  //useselector == get data from store
  // when change in redux store and this  component function to be re-executed
  const show = useSelector(state => state.showCounter); //we can use this multiple times to retrieve different pieces of data from state


  const incrementHandler = () =>{
    dispatch({type: INCREMENT}); // to dispatch new action
    //an action is an object with type property and the value is one of identifiers we use in our redux store reducer
  }

  const increaseHandler = ()=>{
    dispatch({ type: INCREASE, amount: 5}) //it carries extra payload or data(amount property you add to action when dispatch it)
    //add extra propety to action object
  }

   const decrementHandler = () =>{
    dispatch({type: DECREMENT});
  }
  
  const toggleCounterHandler = () => {
    dispatch({type: TOGGLE});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {/* here we get access to redux store */}
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increaseHandler}>increase by value</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;