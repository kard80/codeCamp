import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from './config/axios'

function App() {
  const [count, setCount] = useState(0)

  const fetchData = async() => {
    const result = await axios.get('/count');
    setCount(result.data);
  }

  useEffect(() => {
    fetchData();
  }, [count])

  const onClickThis = async() => {
    const body = {
      count,
    };
    await axios.put('/count', body);
    fetchData();
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick = {() => onClickThis(Number(count + 1))}>up</button>
    </div>
  );
}

export default App;