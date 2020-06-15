import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import Register from './LandingPage/Register'
import Login from './LandingPage/Login'
import Body from './BodyPage/Body'
import PeopleSub from './BodyPage/PeopleSub/PeopleSub'
import General from './BodyPage/PeopleSub/General'
import Information from './BodyPage/PeopleSub/Information'
import Compensation from './BodyPage/PeopleSub/Compensation'
import People from './BodyPage/People'
import TimeStamp from './BodyPage/Timestamp'
import Leaves from './BodyPage/Leaves'
import RegisterAdmin from './LandingPage/RegisterAdmin'
import * as Scroll from 'react-scroll'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={LandingPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/People" component={People} />
          <Route exact path="/TimeStamp" component={TimeStamp} />
          <Route exact path="/Leaves" component={Leaves} />
          <Route exact path="/people/general" component={General} />
          <Route exact path="/people/Compensation" component={Compensation} />
          <Route exact path="/people/Information" component={Information} />
          <Route exact path="/register/admin" component={RegisterAdmin} />
          <ul>
            <li><Link to="/home">Homepage</Link></li>
            <li><Link to="/SuperHr">Body</Link></li>
            <li><Link to="/home/login">login</Link></li>
            <li><Link to="/people/general">People_general</Link></li>
          </ul>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;