// src/HowItWorks.js
import React from 'react';
import './App.css';
import logo from './Images/colorlogo.png';


function HowItWorks() {
  return (
    <div className="container">
      <header>
      <div className="feedback-header">
               <img src={logo} alt="Donato Logo" className="logo" />
            </div> 
        <h1>How It Works</h1>
      </header>
      <div className="card">
        <h2 className="page-title">Our Simple Process</h2>
        <p>Using our platform is straightforward and designed to facilitate easy food donations and requests. Here’s how it works:</p>

        <ol>
          <li><strong>Create an Account:</strong> Sign up and log in to access all the platform features.</li>
          <li><strong>Post Available Food:</strong> If you have surplus food, create a new post with details such as food type, quantity, and location. This makes it visible to those in need.</li>
          <li><strong>Browse Available Food:</strong> Those seeking food can view posted items and filter by location or food type to find what they need.</li>
          <li><strong>Request or Offer Pickup:</strong> Donors and recipients can communicate to arrange a convenient pickup or delivery.</li>
          <li><strong>Make a Difference:</strong> Complete the exchange and feel great about reducing waste and helping others in your community.</li>
        </ol>

        <p>Our platform is free to use and aims to make food donation easy and impactful for everyone.</p>
      </div>
      <footer>
        <p className="footer-text">&copy; 2024 Food Donation Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HowItWorks;
