import classes from './Counter.module.css';
import {Component} from 'react';
import { connect} from 'react-redux';//custom hook made by react reedux team thst allows us to automatically select a part of our state managed by the store
//connect function used as a wrapper around our class component to connect that class component to the store

class Counterwithclass extends Component{
 //Hooks are not usable in class based components
 // so react redux exports connect function which helps to connect class based components to redux
 // connect can use either in function or class based components

 incrementHandler(){
  //here we receive increment from props
  this.props.increment();
 }
decrementHandler(){
  this.props.decrement();
}
toggleCounterHandler(){

};
  render(){
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {/* here we get access to redux store */}
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          {/* this keyword inside of bind refer to class*/}
          <button onClick={this.incrementHandler.bind(this)}>increment</button>
          <button onClick={this.decrementHandler.bind(this)}>decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}


const mapStateToProps = state =>{
  return{
    counter: state.counter  //here counter is props and state.counter is value(pick counter value from redux state and bind that value to counter prop)
  };
}

//now the idea is to store dispatch fucntions in props
//mapDispatchToProps function execute by redux
const mapDispatchToProps = dispatch =>{ //receives dispatch function as argument
   return{
    // keys are prop name which we can use in component
    increment: () =>dispatch({type: 'increment'}), //value is function in which we call dispatch and setup action
    decrement: () =>dispatch({type: 'decrement'}),
   }
} 
// in counter component we have increment prop this holds dispatch function
export default connect(mapStateToProps,mapDispatchToProps )(Counterwithclass);
//return a new function as a value which we then execute again and then we pass our component to that returned function as our argument
// connect is higher order component, execute connect function then return new function, we execute this new function as well to this returned function we pass counter.
// connect need two arguments and both are functions
// 1st one is function that maps redux state to props,which will be received in this component.HENCE we call this function map state to props.(this function receives redux state)
// when using connect redux still setup subscription and manage subscription for you
