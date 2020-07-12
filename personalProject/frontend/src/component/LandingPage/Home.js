import React, {useEffect} from 'react'
import { Col, Row } from 'antd'
import '../../style/LandingPage/Home.css'

export default function Home() {
    useEffect(() => {
        let loadTime = new Date();
        let unloadTime = new Date(JSON.parse(window.localStorage.unloadTime))
        let refreshTime = loadTime.getTime() - unloadTime.getTime();
        if(refreshTime > 3000) {
            window.localStorage.removeItem('ACCESS_TOKEN')
        }
    }, [])
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
