import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'

import * as actionTypes from './store/action'

function App(props) {
  return (
    <div className="App">
      <h1>React-Redux Notes app</h1>
      <h3>Add a Note</h3>
      <div>
        <label>Title</label>
        <br />
        <input type="text" value={props.title} onChange={e => actionTypes.ONCHANGE_TITLE(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <br />
        <textarea value={props.content} onChange={e => actionTypes.ONCHANGE_CONTENT(e.target.value)} />
      </div>
      <button>Add Note</button>
      <hr />
      <h3>Notes</h3>
      <button>Show Active Notes</button>
      <button>Show Deleted Notes</button>
      <ul>
        {props.list.map(item => (
          <li>
            {item.title}
            <br />
            {item.content}
          </li>))}
      </ul>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: () => dispatch({ type: actionTypes.ADD_NOTE }),
    onChangeTitle: e => dispatch({ type: actionTypes.ONCHANGE_TITLE, value: e }),
    onChangeContent: e => dispatch({type: actionTypes.ONCHANGE_CONTENT, value: e})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
