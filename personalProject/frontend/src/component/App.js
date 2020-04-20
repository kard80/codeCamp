import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;