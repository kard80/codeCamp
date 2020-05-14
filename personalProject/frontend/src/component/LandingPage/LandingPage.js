import React, { Component, useState } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Feature from './Feature'
import About from './About'
import Login from './Login'
import '../../style/LandingPage/LandingPage.css'

import {Redirect} from 'react-router-dom'

export default function LandingPage () {
    const [feature, setFeature] = useState(false)

    const linkAtFeature = () => {
        <Redirect to="#feature" />
    }
        return (
            <div>
                <NavBar linkAtFeature={linkAtFeature}/>
                <Home />
                <Feature id= "feature"/>
                <About />
            </div>
        )
    }

