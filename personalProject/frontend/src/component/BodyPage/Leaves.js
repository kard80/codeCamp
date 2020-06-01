import React, { useState, useEffect } from 'react'
import '../../style/BodyPage/Leaves.css'
import NavbarBody from './NavbarBody'
import Sidebar from './Sidebar'
import axios from '../../config/axios'

export default function Leaves() {
    const [type, setType] = useState('')
    const [startDate, setStartDate] = useState('')
    const [timeStartDate, setTimeStartDate] = useState('')
    const [timeEndDate, setTimeEndDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [reason, setReason] = useState('')

    const [leave, setLeave] = useState([])


    const sendData = async () => {
        const body = {
            type,
            startDate,
            endDate,
            timeStartDate,
            timeEndDate,
            reason
        }
        let makeSure = window.confirm('Are you sure to send this?')
        if (makeSure) await axios.post('/leave', body)

        setType('')
        setStartDate('')
        setTimeStartDate('')
        setTimeEndDate('')
        setEndDate('')
        setReason('')

        fetchData();
    }

    const fetchData = async () => {
        const result = await axios.get('/leave');
        setLeave(result.data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <NavbarBody />
            <Sidebar />
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
                                    <th>reason</th>
                                </tr>
                                {leave.map(item => (
                                    <tr>
                                        <td>{item.type}</td>
                                        <td>
                                            {item.startDate}
                                            {item.timeStartDate}
                                        </td>
                                        <td>
                                            {item.endDate}
                                            {item.timeEndDate}
                                        </td>
                                        <td>{item.totalDate}</td>
                                        <td>{item.reason}</td>
                                    </tr>
                                ))}
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
                            <select onChange={e => setType(e.target.value)} required>
                                <option >--Select--</option>
                                <option value="Leave without pay">Leave without pay</option>
                                <option value="Maternity Leave">Maternity Leave</option>
                                <option value="Personal Leave">Personal Leave</option>
                                <option value="Sick">Sick</option>
                            </select>
                        </div>
                        <div>
                            <label>Start date*</label>
                            <br />
                            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required />
                            <br />
                            <input type="radio" id="radioStartDay" name="startDate" value="All day" onChange={e => setTimeStartDate(e.target.value)} required></input>
                            <label for="radioStartDay">All day</label>
                            <input type="radio" id="radioStartAm" name="startDate" value="AM" onChange={e => setTimeStartDate(e.target.value)}></input>
                            <label for="radioStartAm">AM</label>
                            <input type="radio" id="radioStartPm" name="startDate" value="PM" onChange={e => setTimeStartDate(e.target.value)}></input>
                            <label for="radioStartPm">PM</label>
                        </div>
                        <div>
                            <label>End date*</label>
                            <br />
                            <input type="date" onChange={e => setEndDate(e.target.value)} required />
                            {/* <select>
                                <option>--Select--</option>
                                <option></option>
                            </select> */}
                            <br />
                            <input type="radio" id="radioEndDay" name="endDate" value="All day" onChange={e => setTimeEndDate(e.target.value)} required></input>
                            <label for="radioEndDay">All day</label>
                            <input type="radio" id="radioEndAm" name="endDate" value="AM" onChange={e => setTimeEndDate(e.target.value)}></input>
                            <label for="radioEndAm">AM</label>
                            <input type="radio" id="radioEndPm" name="endDate" value="PM" onChange={e => setTimeEndDate(e.target.value)}></input>
                            <label for="radioEndPm">PM</label>
                        </div>
                        <div>
                            <label>Reason</label>
                            <br />
                            <textarea onChange={e => setReason(e.target.value)}></textarea>
                        </div>
                        <div>
                            <input type="submit" onClick={sendData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
