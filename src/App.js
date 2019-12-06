import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Nous from './pages/Nous';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={HomePage}>
              </Route>
              <Route path="/Gallery" component={Gallery}>
              </Route>
              <Route path="/Contact" component={Contact}>
              </Route>
              <Route path="/Nous" component={Nous}>
              </Route>
              <Route path="/Reservation" component={Reservation}>
              </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
