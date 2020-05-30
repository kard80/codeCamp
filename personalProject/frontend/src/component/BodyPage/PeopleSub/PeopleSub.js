import React from 'react'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import NavbarBody from '../NavbarBody'
import Sidebar from '../Sidebar'
import '../../../style/BodyPage/PeopleSub/PeopleSub.css'

export default function PeopleSub() {
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
                                    <h1>Kard Sahaphong</h1>
                                    <p>Consultant</p>
                                </div>
                            </div>
                            <p>Tel: 061-4121998</p>
                            <p>kard.sp2@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
