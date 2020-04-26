import React from 'react'
import Navbar from './NavbarBody'
import Sidebar from './Sidebar'
import '../../style/BodyPage/Body.css'
import People from './People'
import Timestamp from './Timestamp'
import Leaves from './Leaves'

export default function Body() {
    return (
        <div>
            <Navbar />
            <Sidebar />
            {/* <People /> */}
            {/* <Timestamp /> */}
            <Leaves />
        </div>
    )
}
