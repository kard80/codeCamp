import React, {useState, useEffect} from 'react'
import { Col, Row } from 'antd'
import {Link} from 'react-router-dom'
import '../../style/BodyPage/NavbarBody.css'


export default function NavbarBody() {
    const [signOut, setSignOut] = useState(false)
    return (
        <div className="navBarBody">
            <Row className="container">
                <Col>
                    <h1>Super Hr</h1>
                </Col>
                <Col className="containerSubClass">
                    <p>Name waiting from database</p>
                    <img src="https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg" onClick = {() => setSignOut(!signOut)} />
                    <Row>
                        {signOut && <Col className = "signOut"><Link to="/home"><button>Sign out</button></Link></Col>}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
