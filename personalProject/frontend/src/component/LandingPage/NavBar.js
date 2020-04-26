import React, { useEffect, useState, useRef } from 'react'
import { Col, Row, Button } from 'antd'
import 'antd/dist/antd.css';
import '../../style/LandingPage/NavBar.css'

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
                            <Button>Login</Button>
                        </li>
                    </ul>
                </Col>
            </Row>

        </div>
    )
}