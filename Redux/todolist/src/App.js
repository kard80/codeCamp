import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'

import * as actionTypes from './store/action'


function App(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const clicked = async (name, age) => {
    await props.addName(name, age);
    setName('')
    setAge('')
  }
  
  return (
    <div className="App">
      <h1>React-Redux Notes app</h1>
      <h3>Add a Note</h3>
      <div>
        <label>Title</label>
        <br />
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <br />
        <textarea value={age} onChange={e => setAge(e.target.value)} />
      </div>
      <button onClick={() => clicked(name, age)}>Add Note</button>
      <hr />
      <h3>Notes</h3>
      <button>Show Active Notes</button>
      <button>Show Deleted Notes</button>
      <ul>
        {props.name.map((item) => (
          <li key={item.id} onClick={() => props.deleteName(item.id)}>
            {item.name}
            <br />
            {item.age}
          </li>
        ))}
      </ul>

    </div>
  );
}

const mapStateToProps = state => ({
    name: state.name,
    age: state.age
})

const mapDispatchToProps = dispatch => ({
    addName: (name, age) => dispatch({ type: actionTypes.ADD_NAME, name, age}),
    deleteName: id => dispatch({type: actionTypes.DEL_NAME, id})
  })

export default connect(mapStateToProps, mapDispatchToProps)(App);
