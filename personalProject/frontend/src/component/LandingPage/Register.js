import React from 'react'
import '../../style/LandingPage/Register.css'
import {Link} from 'react-router-dom'

export default function Register() {
    return (
        <div className="register">
            <div className="container">
                <div className="crossSign" >
                    <Link to="/home">
                    <div id="item1"></div>
                    <div id="item2"></div>
                    <div id="item3"></div>
                    </Link>
                </div>
                <div><h1>Register</h1></div>
                <div>
                    <label>username</label>
                    <br />
                    <input />
                </div>
                <div>
                    <label>password</label>
                    <br />
                    <input />
                </div>
                <div><button>Submit</button></div>
            </div>
        </div>
    )
}
