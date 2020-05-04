import React from 'react'
import { Col, Row } from 'antd'
import { Link, Route } from 'react-router-dom'
import '../../style/BodyPage/Sidebar.css'
import People from './People'
import PeopleSub from '../BodyPage/PeopleSub/PeopleSub'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Row>
                <Col>
                    <ul>
                    <Link to="/home" className = "sidebarMain"><li>People</li></Link>
                    <Link to ="/information" className = "sidebarMain"><li>Timestamp</li></Link>
                    <Link to="/Leaves" className = "sidebarMain"><li>Leaves</li></Link>
                    </ul>
                </Col>
            </Row>
        </div>
    )
}
