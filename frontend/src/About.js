// src/About.js
import React from 'react';
import './App.css';
import logo from './Images/colorlogo.png';

function About() {
  return (
    <div className="container">
      <header>
      <div className="feedback-header">
            <img src={logo} alt="Donato Logo" className="logo" />
        </div> 
        <h1>About Us</h1>
      </header>
      <div className="card">
        <h2 className="page-title">About Our Food Donation Platform</h2>
        <p>Our platform connects individuals and organizations with surplus food to charitable organizations and communities in need.</p>
        <p>By redistributing food, we aim to reduce food waste and combat hunger. Users can easily post available food items, while recipients can request and access food they need.</p>
        <p><strong>Benefits of Our Platform:</strong></p>
        <ul>
          <li>Reduces food waste by redistributing excess food.</li>
          <li>Supports communities in need by providing free food resources.</li>
          <li>Promotes sustainability and community responsibility.</li>
        </ul>
      </div>
      <footer>
        <p className="footer-text">&copy; 2024 Food Donation Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About;
