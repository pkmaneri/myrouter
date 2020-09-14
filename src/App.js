import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="container"> 
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className="nav-link " to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/product">Product</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Router path="/product">
              <Product />
            </Router>
          </Switch>
        </div>
      </Router>
    );
  }

}

// You can think of these components as "pages"
// in your app.

export default App;
