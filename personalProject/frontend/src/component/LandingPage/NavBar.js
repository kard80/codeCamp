import React, { useEffect, useState, useRef } from 'react'
import { Col, Row, Button } from 'antd'
import { Link, Route } from 'react-router-dom'
import 'antd/dist/antd.css';
import '../../style/LandingPage/NavBar.css'
import '../../style/LandingPage/Login.css'
import Login from './Login'

export default function NavBar(props) {
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
            {login && <Login login={login} setLogin={setLogin}/>}
        </div>
    )
}