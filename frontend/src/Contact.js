// src/ContactUs.js
import React from 'react';
import './App.css';
import logo from './Images/colorlogo.png';

function ContactUs() {
  return (
    <div className="container">
      <header>
      <div className="feedback-header">
               <img src={logo} alt="Donato Logo" className="logo" />
            </div> 
        <h1>Contact Us</h1>
      </header>
      <div className="card">
        <h2 className="page-title">Get in Touch</h2>
        <p>If you have any questions, suggestions, or want to get involved, feel free to reach out to us. We’re here to help you make a difference!</p>
        <p><strong>Email:</strong> support@fooddonationplatform.com</p>
        <p><strong>Phone:</strong> +91 8074035325</p>
      </div>
      <footer>
        <p className="footer-text">&copy; 2024 Food Donation Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
