import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import '../../style/LandingPage/About.css'

export default function About() {
    return (
        <div className="about">
            <div>
                <Row justify="center">
                    <Col>
                        <h1>Contact us</h1>
                    </Col>
                </Row>
                <Row justify = "center" className = "list">
                    <ul>
                        <li><a href = "#"><i class="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href = "#"><i class="fab fa-line"></i> Line</a></li>
                        <li><a href = "#"><i class="fab fa-github"></i> Github</a></li>
                        <li><a href="#"><i class="fa fa-phone-square" aria-hidden="true"></i> Tel</a></li>
                    </ul>
                </Row>
            </div>
        </div>
    )
}
