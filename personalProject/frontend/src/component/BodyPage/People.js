import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import '../../style/BodyPage/People.css'
import { Link } from 'react-router-dom'
import NavbarBody from './NavbarBody'
import Sidebar from './Sidebar'
import jwtDecode from 'jwt-decode'
import axios from '../../config/axios'

export default function People() {
    const [person, setPerson] = useState([])

    const token = jwtDecode(localStorage.getItem('ACCESS_TOKEN'))

    const fetchData = async () => {
        if (token.role === 'User') {
            const result = await axios.get(`/person/${token.id}`)
            setPerson(result.data)
        } else {
            const result = await axios.get(`/person`)
            setPerson(result.data)
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <NavbarBody />
            <Sidebar />
            <div className="people">
                <Row className="head">
                    <table>
                        <tr>
                            <th>name</th>
                            <th>Job Position</th>
                            <th>Department</th>
                            <th>Status</th>
                        </tr>
                        {person.map(item => (
                            <tr>
                                <td><Link to="/people/general">{item.name} {item.surname}</Link></td>
                                <td>{item.jobTitle}</td>
                                <td>Department</td>
                                <td>{item.status}</td>
                            </tr>
                        ))}
                    </table>
                </Row>
            </div>
        </div>
    )
}
