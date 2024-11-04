import React, { useState } from 'react';
import './FoodPostingForm.css'; 
import logo from './Images/colorlogo.png'; 

const FoodPostingForm = ({ addPost }) => { // Accept addPost as a prop
    const [formData, setFormData] = useState({
        name: '',
        size: '',
        location: '',
        contact: '',
        category: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/foodposts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const newPost = await response.json(); // Get the new post data
                addPost(newPost); // Call the addPost function with the new post
                setFormData({
                    name: '',
                    size: '',
                    location: '',
                    contact: '',
                    category: ''
                });
            } else {
                console.error('Failed to add food post');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="food-posting-container">
            <div className="feedback-header">
                <img src={logo} alt="Donato Logo" className="logo" />
            </div> 
            <h2>Food Posting Form</h2>
            <p>Hi! Welcome to the Food Posting Form. This form helps you to provide details on food posting. Please fill out the form with accurate information. Thank you for your contribution!</p>
            <p><b>Don't forget to delete your post once your food is picked.</b></p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="size">Food Packet Size</label>
                    <input type="text" id="size" name="size" value={formData.size} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category" value={formData.category} onChange={handleChange}>
                        <option value="">Select a category</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Drinks">Drinks</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Any Other">Any Other</option>
                    </select>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};
export default FoodPostingForm;