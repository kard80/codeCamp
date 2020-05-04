import React from 'react'
import '../../style/BodyPage/Leaves.css'
import {Col, Row} from 'antd'
import {Link} from 'react-router-dom'

export default function Leaves() {
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
            <div className="sidebar">
                <Row>
                    <Col>
                        <ul>
                            <Link to="/People" className="sidebarMain"><li>People</li></Link>
                            <Link to="/TimeStamp" className="sidebarMain"><li>Timestamp</li></Link>
                            <Link to="/Leaves" className="sidebarMain"><li>Leaves</li></Link>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="leaves">
                <div className="summaryAndHistory">
                    <div className="summary">
                        <div>
                            <table>
                                <tr>
                                    <th>Summary</th>
                                </tr>
                                <tr>
                                    <td>Annual leaves</td>
                                    <td>9/10</td>
                                </tr>
                                <tr>
                                    <td>Sick leaves</td>
                                    <td>15/30</td>
                                </tr>
                                <tr>
                                    <td>Leaves without pay</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>Person leaves</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Parental leaves</td>
                                    <td>90/90</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="history">
                        <div>
                            <h1>Request History</h1>
                            <select>
                                <option>2020 - Apr</option>
                                <option>2020 - Mar</option>
                            </select>
                            <table>
                                <tr>
                                    <th>Leave type</th>
                                    <th>Start date</th>
                                    <th>End date</th>
                                    <th>Total date</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>Sick</td>
                                    <td>April - 23</td>
                                    <td>April - 25</td>
                                    <td>3</td>
                                    <td>Approved</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="request">
                    <div>
                        <h1>Leave Request</h1>
                        <div>
                            <label>Leave type*</label>
                            <br />
                            <select>
                                <option>--Select--</option>
                                <option>Leave without pay</option>
                                <option>Maternity Leave</option>
                                <option>Personal Leave</option>
                                <option>Sick</option>
                            </select>
                        </div>
                        <div>
                            <label>Start date*</label>
                            <br />
                            <select>
                                <option>--Select--</option>
                                <option></option>
                            </select>
                            <br />
                            <input type="radio" id="radioStartDay" name="startDate" value="All day"></input>
                            <label for="radioStartDay">All day</label>
                            <input type="radio" id="radioStartAm" name="startDate" value="AM"></input>
                            <label for="radioStartAm">AM</label>
                            <input type="radio" id="radioStartPm" name="startDate" value="PM"></input>
                            <label for="radioStartPm">PM</label>
                        </div>
                        <div>
                            <label>End date*</label>
                            <br />
                            <select>
                                <option>--Select--</option>
                                <option></option>
                            </select>
                            <br />
                            <input type="radio" id="radioEndDay" name="endDate" value="All day" ></input>
                            <label for="radioEndDay">All day</label>
                            <input type="radio" id="radioEndAm" name="endDate" value="AM"></input>
                            <label for="radioEndAm">AM</label>
                            <input type="radio" id="radioEndPm" name="endDate" value="PM"></input>
                            <label for="radioEndPm">PM</label>
                        </div>
                        <div>
                            <label>Approver*</label>
                            <br />
                            <select>
                                <option>--Select</option>
                            </select>
                        </div>
                        <div>
                            <label>Reason</label>
                            <br />
                            <textarea></textarea>
                        </div>
                        <div>
                            <label>Upload Files</label>
                            <br />
                            <input type="file" />
                        </div>
                        <div>
                            <input type="submit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
