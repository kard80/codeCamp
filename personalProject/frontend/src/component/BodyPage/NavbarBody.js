import React from 'react'
import {Col, Row} from 'antd'
import '../../style/BodyPage/NavbarBody.css'


export default function NavbarBody() {
    return (
        <div className = "navBarBody">
            <Row className = "container">
                <Col>
                    <h1>Super Hr</h1>
                </Col>
                <Col className = "containerSubClass">
                    <p>Name waiting from database</p>
                    <img src = "https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg"/>
                </Col>
            </Row>
        </div>
    )
}
