import * as React from 'react';
import './App.css'; 
import logo from './Images/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><img src={logo} alt="Your Logo" className="logo" /></li>
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/how-it-works">How it Works</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
        <li className="nav-item1"><Link to="/new-window">Sign In</Link></li>
        <li className="nav-item2">|</li>
        <li className="nav-item1"><Link to="/new-window/new-window1">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
