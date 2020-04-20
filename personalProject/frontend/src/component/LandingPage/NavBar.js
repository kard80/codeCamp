import React, { Component } from 'react'
import {Col, Row, Button} from 'antd'
import 'antd/dist/antd.css';
import '../../style/LandingPage/NavBar.css'


export default class NavBar extends Component {
    render() {
        return (
            <div id = "navBar">
                <Row className = "nav">
                    <Col>
                        <h1>Super HR</h1>
                    </Col>
                    <Col className = "navList">
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
}
