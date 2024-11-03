import React, { useState } from 'react';
import logo from './Images/colorlogo.png'; // Adjust the path to your logo image
import './FeedbackForm.css'; // Ensure this imports the CSS file

function FeedbackForm() {
    const [formData, setFormData] = useState({
       name: '',
       email: '',
       feedback: ''
    }); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();   
        alert('Thank you for your feedback!');
        setFormData({
            name: '',
            email: '',
            feedback: ''
        });
    };   
    return (
       <div>
            {/* Header with Logo */}
            <div className="feedback-header">
               <img src={logo} alt="Donato Logo" className="logo" />
            </div> 
            {/* Feedback Form */}
            <div className="feedback-form">
                <h2>Feedback Form</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Feedback:</label>
                        <textarea
                            name="feedback"
                            value={formData.feedback}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
       </div>
    );
}

export default FeedbackForm;
