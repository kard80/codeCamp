import React from 'react'
import '../../../style/BodyPage/PeopleSub/Information.css'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import PeopleSub from './PeopleSub'

export default function Information() {
    return (
        <div>
            <PeopleSub />
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
