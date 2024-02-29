import* as React from 'react';
import logo from './Images/logo.png';
import Rectangle from './Rectangle';
import {Link} from "react-router-dom";


function Home() {
    return (
       
        <div className="home-container">
            
        <div className="text-section">
        <Rectangle className='rect'/>
            <h1>Welcome to Donato!</h1>
            <p className='para'>“Donato is the platform where we re redefining food 
sharing and community care. Our mission is to 
connect excess food with those in need, reducing food wastage and nurturing communities."</p>
<div className='buttoncontainer'><button className='start'><Link className='link1' to="/new-window">Get Started</Link></button></div>
        </div>
        <img src={logo} alt="Descriptive alt text"  />
        
    </div>
    );
}

export default Home;
