import * as React from 'react';
import './App.css'; 
import logo from './Images/logo.png';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
     
      <ul className="nav-list">
     <li><img src={logo} alt="Your Logo" className="logo" /></li> 
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">About</a></li>
        <li className="nav-item"><a href="#">How it works</a></li>
        <li className="nav-item"><a href="#">FAQ</a></li>
        <li className="nav-item"><a href="#">Contact</a></li>
        <li className="nav-item1" ><Link to="/new-window">Sign In</Link></li>
        <li className='nav-item2'>|</li>
        <li className="nav-item1"><Link to="/new-window/new-window1">Sign Up</Link></li>
      
      </ul>
      
    
     
    </nav>
  );
}

export default Navbar;