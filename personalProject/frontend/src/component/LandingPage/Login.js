import React, { useEffect, useState, usePrevious } from 'react'
import { Col, Row } from 'antd'
import '../../style/LandingPage/Login.css'
import NavBar from './NavBar'

export default function Login() {
    return (
            <div className="login">
                <div className="block">
                    <div>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                    </div>
                    <div className="header"><h1>Super HR</h1></div>
                    <div className="loginField">
                        <div>
                            <input placeholder="Username" />
                            <input placeholder="Password" />
                            <button>Log in</button>
                            <p>Forget your password?</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}
