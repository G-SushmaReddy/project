// src/HelpCenter.js
import React from 'react';
import './App.css';
import logo from './Images/colorlogo.png';

function HelpCenter() {
  return (
    <div className="container">
      <header>
      <div className="feedback-header">
               <img src={logo} alt="Donato Logo" className="logo" />
            </div> 
        <h1>Help Center</h1>
      </header>
      <div className="main-content">
        <div className="card">
          <h2 className="page-title">How can we help you?</h2>
          <p>Welcome to our Help Center. Here you can find answers to frequently asked questions and guidance on how to use our platform.</p>
          <p>If you need further assistance, feel free to reach out to our support team.</p>
          <p>For queries:</p>
          <p>email:fooddonato@gmail.com</p>
          <p>Phone: +91 8074035325</p>
        </div>
      </div>
      <footer>
        <p className="footer-text">&copy; 2024 Food Donation Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HelpCenter;
