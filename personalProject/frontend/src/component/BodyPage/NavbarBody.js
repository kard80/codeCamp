import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import '../../style/BodyPage/NavbarBody.css'
import jwtDecode from 'jwt-decode'

export default function NavbarBody(props) {
    const [signOut, setSignOut] = useState(false)
    
    const token = localStorage.getItem('ACCESS_TOKEN');
    const decode = jwtDecode(token)

    const signOutFnc = () => {
        localStorage.removeItem('ACCESS_TOKEN')
    }

    return (
        <div className="navBarBody">
            <Row className="container">
                <Col>
                    <h1>Super Hr</h1>
                </Col>
                <Col className="containerSubClass">
                    <p>{decode.username}</p>
                    <img src="https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg" onClick={() => setSignOut(!signOut)} />
                    <Row>
                        {signOut && <Col className="signOut"><Link to="/home"><button onClick={signOutFnc}>Sign out</button></Link></Col>}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
