import React from 'react'
import { Row, Col } from 'antd'
import '../../style/BodyPage/People.css'
import { Link } from 'react-router-dom'
import NavbarBody from './NavbarBody'
import Sidebar from './Sidebar'

export default function People() {
    return (
        <div>
            <NavbarBody />
            <Sidebar />
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
