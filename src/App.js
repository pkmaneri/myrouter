import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  NavLink
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Cart from'./pages/Cart'
import Search from './pages/Search';
import ToDoList from './pages/ToDoList';
import Calculator from './pages/Calculator';
import Flightbooking from './pages/Flightbooking';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="container"> 
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <NavLink className="nav-link " to="/home" activeClassName="active"> Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/about" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/dashboard"   activeClassName="active">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/product">Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/cart">Cart</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/search">Search</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/todolist">ToDoList</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/calculator">Calculator</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/flightbooking">Flightbooking</NavLink>
            </li>
          </ul>

          <Switch>
            <Route exact path="/home">
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
            <Router path="/cart">
              <Cart/>
            </Router>
            <Router path="/search">
              <Search/>
            </Router>
            <Router path="/todolist">
              <ToDoList/>
            </Router>
            <Router path="/calculator">
              <Calculator/>
            </Router>
            <Router path="/flightbooking">
              <Flightbooking/>
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
