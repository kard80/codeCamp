import React, { useState, useEffect } from 'react'
import '../../style/BodyPage/Timestamp.css'
import NavbarBody from './NavbarBody'
import Sidebar from './Sidebar'
import axios from '../../config/axios'

export default function Timestamp() {
    const [timeAttendance, setTimeAttendance] = useState([]);
    const searchNull = timeAttendance.some(el => el.clockOut === null)


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const result = await axios.get('/timeAttendance');
        setTimeAttendance(result.data)
    }

    const clickClockIn = async () => {
        alert('Clock-in completed')
        await axios.post('/timeAttendance')
        fetchData();
    }

    const clickClockOut = async () => {
        const id = timeAttendance.length;
        const checkRemark = prompt('Do you have any remark?')
        const remark = checkRemark ? checkRemark : '-'
        const body = {
            id,
            remark,
        }
        await axios.put('/timeAttendance', body)
        fetchData();
    }

    return (
        <div>
            <NavbarBody />
            <Sidebar />
            <div className="timestamp">
                <div className="head">
                    <select>
                        <option>2020 Apr</option>
                        <option>Good</option>
                        <option>Morning</option>
                    </select>
                    {searchNull ?
                        <button onClick={clickClockOut}>Clock-out</button> :
                        <button className="clockOut" onClick={clickClockIn}>Clock-in</button>
                    }
                </div>
                <div className="table">
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Clock-in</th>
                            <th>Clock-out</th>
                            <th>Working Time</th>
                            <th>Remark</th>
                        </tr>
                        {timeAttendance.map(item => (
                            <tr>
                                <td>{item.date}</td>
                                <td>{item.clockIn}</td>
                                <td>{item.clockOut}</td>
                                <td>{item.workingTime}</td>
                                <td>{item.remark}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}
