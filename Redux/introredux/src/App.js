import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'


function App(props) {
  return (
    <div className="App">
      {props.counter}
      <br />
      <button onClick={props.increment}>Add</button>
      <button onClick={props.decrement}>Sub</button>
      <button onClick={() => props.addFive(5)}>+5</button>
      <button onClick={() => props.subFive(5)}>-5</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: "INCREMENT"}),
    decrement: () => dispatch({type: "DECREMENT"}),
    addFive: number => dispatch({type: "ADD_FIVE", value: number}),
    subFive: number => dispatch({type: "SUB_FIVE", value: number}),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
