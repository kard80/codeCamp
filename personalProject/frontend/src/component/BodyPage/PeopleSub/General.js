import React from 'react'
import '../../../style/BodyPage/PeopleSub/General.css'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

export default function General() {
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
            <div className="General">
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
                            <h1>Personal information</h1>
                        </div>
                        <div id="item2">
                            <label>Name</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item3">
                            <label>Surname</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item4">
                            <label>E-mail</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item5">
                            <label>Gender</label>
                            <br />
                            <select>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div id="item6">
                            <label>Date of birth</label>
                            <br />
                            <input type="date"></input>
                        </div>
                        <div id="item7">
                            <label>Martial status</label>
                            <br />
                            <select>
                                <option>Single</option>
                                <option>Married</option>
                                <option>divorced</option>
                                <option>widowed</option>
                            </select>
                        </div>
                        <div id="item8">
                            <label>Nationality</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item9">
                            <label>ID number</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item10">
                            <label>Contact number</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item11">
                            <label>Address</label>
                            <br />
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
