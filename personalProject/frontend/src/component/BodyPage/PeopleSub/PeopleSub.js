import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import NavbarBody from '../NavbarBody'
import Sidebar from '../Sidebar'
import '../../../style/BodyPage/PeopleSub/PeopleSub.css'
import axios from '../../../config/axios'

export default function PeopleSub(props) {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');

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
                                    <h1>{`${props.name}`} {true? props.surname: ''}</h1>
                                    <p>{props.jobTitle}</p>
                                </div>
                            </div>
                            <p>Tel: {props.contactNumber}</p>
                            <p>{props.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
