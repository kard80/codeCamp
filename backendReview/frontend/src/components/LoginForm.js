import React, { useState, useEffect } from 'react'
import axios from '../config/axios';

export default function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {isLogin, setIsLogin} = props;
    const login = async () => {
        const body = {
            username,
            password
        }
        const result = await axios.post('/user/login', body)
        localStorage.setItem("ACCESS_TOKEN", result.data.token)
        setIsLogin(true)
        console.log(result)
    }

    const logout = () => {
        localStorage.removeItem("ACCESS_TOKEN")
        setIsLogin(false)
        console.log('log out complete')
    }
    return (
        <div>
            <div>
                <label>Username:</label>
                <input value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick = {login}>Login</button>
            {isLogin && <button onClick = {logout}>Log out</button>}
        </div>
    )
}