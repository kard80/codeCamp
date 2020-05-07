import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import axios from '../config/axios'
import LoginForm from './LoginForm'
import jwtDecode from 'jwt-decode'
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [nameValue, setNameValue] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchData();
    const token = localStorage.getItem("ACCESS_TOKEN")
    if(token) {
      const user = jwtDecode(token);
      setUserInfo(user)
      setIsLogin(true)
    }
  }, [])


  const fetchData = async () => {
    const result = await axios.get('/student')
    setStudents(result.data)
  }

  const post = async () => {
    const body = {
      name: nameValue,
      age: ageValue,
      number: phoneValue
    };
    await axios.post('/student', body)
    fetchData();
    setNameValue('')
    setAgeValue('')
    setPhoneValue('')
  }

  const del = async (id) => {
    const headers = {Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`}
    await axios.delete(`/student/${id}`, {headers})
    fetchData()
    alert(`${id} has been deleted`)
    
  }
  return (
    <div className="App">
      <LoginForm isLogin={isLogin} setIsLogin={setIsLogin}/>
      <button onClick = {fetchData}>Fetch data</button>
      {students.map((item) => (
        <div
          style = {{margin: "5px", width: "50%", border: "solid 1px"}}>
          <div>name: {item.name} </div>
          <div>age: {item.age} </div>
          <div>phone: {item.number_phone} </div>
          {isLogin && <button onClick = {() => del(item.id)}>Delete</button>}
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
