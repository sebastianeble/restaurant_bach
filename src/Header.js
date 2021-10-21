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
    <div className="header">
      <div className="headerImage">
        <img src={logo} alt="logo" />
      </div>
      
      <div className="hr-header"></div>
      <Router>
        <nav className="nav-bar">
          <ul>
            <Link className="nav-li-element">HOME</Link>
            <Link className="nav-li-element">WOCHENKARTE</Link>
            <Link className="nav-li-element">SPEISEKARTE</Link>
            <Link className="nav-li-element">BAR</Link>
            <Link className="nav-li-element">AKTUELLES (CORONA INFOS)</Link>         
          </ul>
        </nav>
      </Router>
      <div className="hr-header"></div>

    </div>
          
  );
}

export default Header;
