import React from 'react'
import { Row, Col } from 'antd'
import '../../style/BodyPage/People.css'
import {Link} from 'react-router-dom'

export default function People() {
    return (
        <div>
            <div className="navBarBody">
                <Row className="container">
                    <Col>
                        <h1>Super Hr</h1>
                    </Col>
                    <Col className="containerSubClass">
                        <p>Name waiting from database</p>
                        <img src="https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg" />
                    </Col>
                </Row>
            </div>
            <div className="sidebar">
                <Row>
                    <Col>
                        <ul>
                            <Link to="/People" className="sidebarMain"><li>People</li></Link>
                            <Link to="/TimeStamp" className="sidebarMain"><li>Timestamp</li></Link>
                            <Link to="/Leaves" className="sidebarMain"><li>Leaves</li></Link>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="people">
                <Row className="head">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Job Position</th>
                            <th>Department</th>
                            <th>Supervisor</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td><Link to="/people/general">Mike Jordan</Link></td>
                            <td>Digital marketing</td>
                            <td>Marketing</td>
                            <td>Tony alba</td>
                            <td>Active</td>
                        </tr>

                    </table>
                </Row>
            </div>
        </div>
    )
}
