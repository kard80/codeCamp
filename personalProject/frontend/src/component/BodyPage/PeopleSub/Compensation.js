import React from 'react'
import '../../../style/BodyPage/PeopleSub/Compensation.css'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

export default function Compensation() {
    return (
        <div>
            <div className="navBarBody">
                <Row className="container">
                    <Col>
                        <h1>Super Hr</h1>
                    </Col>
                    <Col className="containerSubClass">
                        <p>Name waiting from database</p>
                        <img src="https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg" />
                    </Col>
                </Row>
            </div>
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
                    {/* <General /> */}
                    {/* <Information /> */}
                    {/* <Compensation /> */}
                </div>
            </div>
            <div className="sidebar">
                <Row>
                    <Col>
                        <ul>
                            <Link to="/home" className="sidebarMain"><li>People</li></Link>
                            <Link to="/TimeStamp" className="sidebarMain"><li>Timestamp</li></Link>
                            <Link to="/Leaves" className="sidebarMain"><li>Leaves</li></Link>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="compensation">
                <div className="general">
                    <div className="backArrow">
                        <i class="fas fa-arrow-left"></i>
                        <span>Back</span>
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
                        {/* <General /> */}
                        {/* <Information /> */}
                        {/* <Compensation /> */}
                    </div>
                </div>
                <div className="sidebarPersonal">
                    <ul>
                        <Link to="/people/general">
                            <li className="personalList">General</li>
                        </Link>
                        <Link to="/people/Information">
                            <li className="personalList">Employee info.</li>
                        </Link>
                        <Link to="/people/Compensation">
                            <li className="personalList">Compensation</li>
                        </Link>
                    </ul>
                </div>
                <div className="gridContainer">
                    <div className="gridItem">
                        <div id="item1">
                            <h1>Compensation</h1>
                        </div>
                        <div id="item2">
                            <label>Tax ID</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item3">
                            <label>Account No.</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item4">
                            <label>Account name</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item5">
                            <label>Compensation type</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item6">
                            <label>Salary</label>
                            <br />
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
