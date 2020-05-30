import React, {useState, useEffect} from 'react'
import { Col, Row } from 'antd'
import {Link} from 'react-router-dom'
import '../../style/BodyPage/NavbarBody.css'
import axios from '../../config/axios'


export default function NavbarBody() {
    const [signOut, setSignOut] = useState(false)

    const signOutFnc = () => {
        localStorage.removeItem('ACCESS_TOKEN')
    }

    useEffect(() => {
        
    },[])

    return (
        <div className="navBarBody">
            <Row className="container">
                <Col>
                    <h1>Super Hr</h1>
                </Col>
                <Col className="containerSubClass">
                    <p>name</p>
                    <img src="https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg" onClick = {() => setSignOut(!signOut)} />
                    <Row>
                        {signOut && <Col className = "signOut"><Link to="/home"><button onClick={signOutFnc}>Sign out</button></Link></Col>}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
