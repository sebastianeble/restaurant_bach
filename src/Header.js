import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './style/header.css'
import logo from './img/logo.png'


function Header() {
  return (
    <React.Fragment>
      <img src={logo} alt="logo" />
      <div className="hr"></div>
      <Router>
        <nav className="nav-bar">
          <ul>
            <Link className="nav-li-element">Eins</Link>
            <Link className="nav-li-element">Eins</Link>
            <Link className="nav-li-element">Eins</Link>
            <Link className="nav-li-element">Eins</Link>         
          </ul>
        </nav>
      </Router>
      <div className="hr"></div>

    </React.Fragment>
          
  );
}

export default Header;
