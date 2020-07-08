import React, { useState } from 'react'
import Navbar from '../BodyPage/NavbarBody'
import Sidebar from '../BodyPage/Sidebar'
import {Link} from 'react-router-dom'
import '../../style/AdminPage/Department.css'

export default function Department() {
    const [create, setCreate] = useState(false)
    const [department, setDepartment] = useState(false)

    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="department">
                <div className="headTable">
                    <select>
                        <option>--Select--</option>
                    </select>
                    <Link to="/people/admin/CreateDepartment"><button>Create</button></Link>
                </div>
                <div className="head">
                    <table>
                        <tr>
                            <th>Department</th>
                            <th>Job Position</th>
                            <th>Employee</th>
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>Human resource</td>
                            <td>Recruiter</td>
                            <td>13</td>
                            <td>Active</td>
                        </tr>
                    </table>
                </div>
            </div>
            {/* {department? xxx: xxx} */}
            {/* {position? xxx: xxx} */}
            {/* {create ? alert('yes') : alert('no')} */}
        </div>
    )
}
