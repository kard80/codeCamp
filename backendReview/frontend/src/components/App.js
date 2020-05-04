import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [nameValue, setNameValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const fetchData = async () => {
    const result = await axios.get('http://localhost:8000/student')
    setStudents(result.data)
  }

  const post = async () => {
    const body = {
      name: nameValue,
      age: ageValue,
      number: phoneValue
    };
    await axios.post('http://localhost:8000/student', body)
  }

  const del = async (id) => {
    console.log(`function del was run at id: ${id}`)
    await axios.delete(`http://localhost:8000/student/${id}`)
    fetchData();
  }
  return (
    <div className="App">
      <button onClick = {fetchData}>Fetch data</button>
      {students.map((item) => (
        <div
          style = {{margin: "5px", width: "50%", border: "solid 1px"}}>
          <div>name: {item.name} </div>
          <div>age: {item.age} </div>
          <div>phone: {item.number_phone} </div>
          <button onClick = {() => del(item.id)}>Delete</button>
          <hr />
        </div>
      ))}
      <h1>Add a student</h1>
      <div>
        Name: <input value = {nameValue} 
        onChange = {e => setNameValue(e.target.value)} />
      </div>
      <div>
        Age: <input value = {ageValue} 
        onChange = {e => setAgeValue(e.target.value)}/>
      </div>
      <div>
        Phone: <input value = {phoneValue}
        onChange = {e => setPhoneValue(e.target.value)}/>
      </div>
      <button onClick = {post}>Add new student</button>
    </div>
  );
}

export default App;
