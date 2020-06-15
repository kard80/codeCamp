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

    const payload = jwtDecode(localStorage.getItem('ACCESS_TOKEN'))

    const fetchData = async () => {
        const result = await axios.get(`/person/${payload.id}`)
        setPerson(result.data)
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
                        <tr>
                            <td><Link to="/people/general">{person.name} {person.surname}</Link></td>
                            <td>{person.jobTitle}</td>
                            <td>Department</td>
                            <td>{person.status}</td>
                        </tr>

                    </table>
                </Row>
            </div>
        </div>
    )
}
