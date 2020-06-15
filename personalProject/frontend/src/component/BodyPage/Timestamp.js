import React, { useState, useEffect } from 'react'
import '../../style/BodyPage/Timestamp.css'
import NavbarBody from './NavbarBody'
import Sidebar from './Sidebar'
import axios from '../../config/axios'
import jwtDecode from 'jwt-decode'

export default function Timestamp() {
    const [timeAttendance, setTimeAttendance] = useState([]);
    const [dropdown, setDropdown] = useState([])
    const [dropdownValue, setDropdownValue] = useState('')
    const searchNull = timeAttendance.some(el => el.clockOut === null)

    const token = jwtDecode(localStorage.getItem('ACCESS_TOKEN'))

    const fetchData = async () => {
        const result = await axios.get(`/timeAttendance/${token.id}`);
        setTimeAttendance(result.data)
    }


    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        dropdownInsert()
    }, [timeAttendance])

    const dropdownInsert = () => {
        let arr = []
        for (let i = 0; i < timeAttendance.length; i++) {
            let year = timeAttendance[i].createdAt.substring(0, 4)
            let month = timeAttendance[i].createdAt.substring(5, 7)
            arr = [...arr, `${year}-${month}`]
        }
        let sendArr = [...new Set(arr)]
        setDropdown(sendArr)
    }

    const requestData = () => {
        let arr = [];
        for (let i = 0; i < timeAttendance.length; i++) {
            if (timeAttendance[i].createdAt.substring(0, 7) === dropdownValue) {
                arr = [...arr, (
                    <tr>
                        <td>{timeAttendance[i].date}</td>
                        <td>{timeAttendance[i].clockIn}</td>
                        <td>{timeAttendance[i].clockOut}</td>
                        <td>{timeAttendance[i].workingTime}</td>
                        <td>{timeAttendance[i].remark}</td>
                    </tr>
                )]
            }
        }
        return arr
    }

    const clickClockIn = async () => {
        const body = {
            personId: token.id
        }
        alert('Clock-in completed')
        await axios.post('/timeAttendance', body)
        fetchData();
    }

    const clickClockOut = async () => {
        const id = timeAttendance.length;
        const checkRemark = prompt('Do you have any remark?')
        const remark = checkRemark ? checkRemark : '-'
        const body = {
            id,
            remark,
            personId: token.id,
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
                    <select value={dropdownValue} onChange={e => setDropdownValue(e.target.value)}>
                        <option>--Select--</option>
                        {dropdown.map(item => (
                            item === dropdown.sort().reverse()[0] ?
                                <option selected>{item}</option> :
                                <option>{item}</option>
                        ))}
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
                        {requestData()}
                    </table>
                </div>
            </div>
        </div>
    )
}
