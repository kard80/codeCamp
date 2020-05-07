import React, { useEffect, useState, usePrevious } from 'react'
import { Col, Row } from 'antd'
import '../../style/LandingPage/Login.css'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

export default function Login(props) {
    const {login, setLogin} = props
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
                        <input placeholder="Username" />
                        <input placeholder="Password" />
                        <Link to="/People" className="buttonLogin"><button>Log in</button></Link>
                        <Link to="/register" className="createAccount"><p>Create administrative user</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
