import React, { useEffect, useState, usePrevious } from 'react'
import { Col, Row } from 'antd'
import '../../style/LandingPage/Login.css'
import NavBar from './NavBar'
import { Link, Redirect } from 'react-router-dom'
import axios from '../../config/axios'

export default function Login(props) {
    const {login, setLogin} = props
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const loginFnc = async () => {
        const body = {
            username,
            password
        }
        const result = await axios.post('/user/login', body);
        localStorage.getItem("ACCESS_TOKEN", result.data.token)
        setIsLogin(true)
        console.log(result)
    }
    return (
        <div className="login">
            <div className="block">
                <div className="cross" onClick={() => setLogin(false)}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                </div>
                <div className="header"><h1>Super HR</h1></div>
                <div className="loginField">
                    <div>
                        <input placeholder="Username" value = {username} onChange = {e => setUsername(e.target.value)}/>
                        <input placeholder="Password" value = {password} onChange = {e => setPassword(e.target.value)}/>
                        <button className="buttonLogin">Log in</button>
                        {isLogin && <Redirect to = "/People" />}
                        <Link to="/register" className="createAccount"><p>Create administrative user</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
