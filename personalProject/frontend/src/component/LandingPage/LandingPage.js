import React, { Component } from 'react'
import NavBar from './NavBar'
import Home from './Home'
import Feature from './Feature'
import '../../style/LandingPage/LandingPage.css'


export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Home />
                <Feature />
            </div>
        )
    }
}
