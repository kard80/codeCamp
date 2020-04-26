import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import Login from './LandingPage/Login'
import Body from './BodyPage/Body'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={LandingPage} />
        <Route exact path="/superHr" component={Body} />
        <Route exact path="/home/login" component={Login} />
        <ul>
          <li><Link to="/home">Homepage</Link></li>
          <li><Link to="/SuperHr">Body</Link></li>
          <li><Link to="/home/login">login</Link></li>
        </ul>
      </Switch>
    </BrowserRouter>
  );
}

export default App;