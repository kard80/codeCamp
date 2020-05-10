import React, {useState, useEffect} from 'react'
import '../../style/LandingPage/Register.css'
import {Link} from 'react-router-dom'
import axios from '../../config/axios'

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameArray, setUsernameArray] = useState([])
    const [passwordArray, setPasswordArray] = useState([])


    const submit = async () => {
        const body = {
            username,
            password
        }
        await axios.post('/user/register', body)
        setUsername('')
        setPassword('')
    }

    return (
        <div className="register">
            <div className="container">
                <div className="crossSign">
                    <Link to="/home">
                    <div id="item1"></div>
                    <div id="item2"></div>
                    <div id="item3"></div>
                    </Link>
                </div>
                <div><h1>Register</h1></div>
                <div>
                    <label>username</label>
                    <br />
                    <input value = {username} onChange = {e => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>password</label>
                    <br />
                    <input value = {password} onChange = {e => setPassword(e.target.value)} />
                </div>
                <div><button onClick={submit}>Submit</button></div>
            </div>
        </div>
    )
}
