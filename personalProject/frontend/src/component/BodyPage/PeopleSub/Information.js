import React from 'react'
import '../../../style/BodyPage/PeopleSub/Information.css'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

export default function Information() {
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
            <div className="information">
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
                            <h1>Employee information</h1>
                        </div>
                        <div id="item2">
                            <label>Employee code</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item3">
                            <label>Working start date</label>
                            <br />
                            <input type="date"></input>
                        </div>
                        <div id="item4">
                            <label>Probation end date</label>
                            <br />
                            <input type="date"></input>
                        </div>
                        <div id="item5">
                            <label>Job title</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item6">
                            <label>Department</label>
                            <br />
                            <input></input>
                        </div>
                        <div id="item7">
                            <label>Employee type</label>
                            <br />
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div id="item8">
                            <label>Employee status</label>
                            <br />
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div id="item9">
                            <label>Manager</label>
                            <br />
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div id="item10">
                            <label>Resignation date</label>
                            <br />
                            <input type="date"></input>
                        </div>
                        <div id="item11">
                            <label>Resignation reason</label>
                            <br />
                            <input></input>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
