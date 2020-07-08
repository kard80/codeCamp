import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import NavbarBody from '../NavbarBody'
import Sidebar from '../Sidebar'
import '../../../style/BodyPage/PeopleSub/PeopleSub.css'
import axios from '../../../config/axios'

export default function PeopleSub(props) {
    const [person, setPerson] = useState([])
    const {
        name, surname, email, gender, dateOfBirth, martialStatus, nationality, IDNumber, contactNumber, address,

        employeeCode, workingStartDate, probationEndDate, jobTitle, department, employeeType, employeeStatus, manager,
        resignationDate, resignationReason,

        taxID, accountNO, accountName, compensationType, salary
    }
        = props

    const getData = async () => {
        const result = await axios.get(`/person/${props.id}`);
        setPerson(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        getData();
    }, [])

    const sendData = async () => {
        const body = {
            name,
            surname,
            email,
            gender,
            dateOfBirth,
            martialStatus,
            nationality,
            IDNumber,
            contactNumber,
            address,

            employeeCode,
            workingStartDate,
            probationEndDate,
            jobTitle,
            department,
            employeeType,
            employeeStatus,
            manager,
            resignationDate,
            resignationReason,

            taxID,
            accountNO,
            accountName,
            compensationType,
            salary,
        }
        await axios.put(`/person/${props.id}`, body)
        await getData();
        alert('Update completed')
    }


    return (
        <div>
            <NavbarBody />
            <Sidebar />
            <div className="general">
                <div className="backArrow">
                    <Link to="/People">
                        <i class="fas fa-arrow-left"></i>
                        <span>Back</span>
                    </Link>
                </div>
                <div className="profileAndPanel">
                    <div className="profile">
                        <div>
                            <div>
                                <img src="#" />
                                <div className="name">
                                    <h1>{person.name} {true ? person.surname : ''}</h1>
                                    <p>{person.jobTitle}</p>
                                </div>
                            </div>
                            <p>Tel: {person.contactNumber}</p>
                            <p>{person.email}</p>
                            <button onClick={sendData}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
