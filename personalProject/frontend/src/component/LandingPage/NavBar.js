import React, { useEffect, useState, useRef } from 'react'
import { Col, Row, Button } from 'antd'
import {Link, Route} from 'react-router-dom'
import 'antd/dist/antd.css';
import '../../style/LandingPage/NavBar.css'
import '../../style/LandingPage/Login.css'
import Login from './Login'
import Feature from './Feature'
import LandingPage from './LandingPage'

export default function NavBar() {
    const [login, setLogin] = useState(false)

    return (
        <div id="navBar">
            <Row className="nav">
                <Col>
                    <h1>Super HR</h1>
                </Col>
                <Col className="navList">
                    <ul>
                        <li>Home</li>
                        <li>Feature</li>
                        <li>Contact us</li>
                        <li>
                            <button onClick={() => setLogin(true)}>Login</button>
                        </li>
                    </ul>
                </Col>
            </Row>
            {login && (
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
                                <button><Link to = "/People"  className = "buttonLogin">Log in</Link></button>
                                <p>Forget your password?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}