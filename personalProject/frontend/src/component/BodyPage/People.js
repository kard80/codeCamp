import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import '../../style/BodyPage/People.css'
import { Link } from 'react-router-dom'
import NavbarBody from './NavbarBody'
import Sidebar from './Sidebar'
import jwtDecode from 'jwt-decode'
import axios from '../../config/axios'

export default function People() {
    const [person, setPerson] = useState('')
    const token = localStorage.getItem('ACCESS_TOKEN');
    const decode = jwtDecode(token)

    const fetchData = async () => {
        const result = await axios.get('/person')
        setPerson(result.data)
    }

    useEffect(() => {
        fetchData();
    })

    return (
        <div>
            <NavbarBody username={decode.username}/>
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
