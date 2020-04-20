import React from 'react'
import { Col, Row } from 'antd'
import '../../style/LandingPage/Home.css'

export default function Home() {
    return (
        <div>
            <Row className="home">
                <Col className="miniHome">
                    <img src="https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
                    <div>
                        <div>
                            <div>
                                <h1>สัมผัสประสบการณ์ใหม่ของ Hr</h1>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
