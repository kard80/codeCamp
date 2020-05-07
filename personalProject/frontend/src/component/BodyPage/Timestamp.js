import React from 'react'
import '../../style/BodyPage/Timestamp.css'
import {Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import NavbarBody from './NavbarBody'
import Sidebar from './Sidebar'

export default function Timestamp() {
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
                <button>Clock-in</button>
            </div>
            <div className = "table">
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Clock-in</th>
                        <th>Clock-out</th>
                        <th>Working Time</th>
                        <th>OT(Min)</th>
                        <th>Remark</th>
                    </tr>
                    <tr>
                        <td>April 13</td>
                        <td>8.55 A.M.</td>
                        <td>19.25 P.M.</td>
                        <td> 10.30 hr</td>
                        <td>85</td>
                        <td>-</td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
    )
}
