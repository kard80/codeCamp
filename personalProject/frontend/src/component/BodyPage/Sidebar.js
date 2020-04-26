import React from 'react'
import {Col, Row} from 'antd'
import '../../style/BodyPage/Sidebar.css'

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <Row>
                <Col>
                    <ul>
                      <li>People</li>  
                      <li>Timestamp</li>  
                      <li>Leaves</li>  
                    </ul>    
                </Col>
            </Row>
        </div>
    )
}
