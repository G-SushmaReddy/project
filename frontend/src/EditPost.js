import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectUser } from './slices/slices';
import { useNavigate } from 'react-router-dom';

function EditPost() {
    const user = useSelector(selectUser);
    const [firstname, setFirstname] = useState(user.firstname || "");
    const [lastname, setLastname] = useState(user.lastname || "");
    const [gmail, setGmail] = useState(user.email || "");
    const [username, setUsername] = useState(user.username || "");
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data if needed, or assume it comes from Redux
        if (!user) {
            // Redirect or fetch user data if necessary
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = { firstname, lastname, email: gmail, username };

        try {
            const response = await axios.put(`http://localhost:3001/api/user/${user.id}`, updatedUser);
            if (response.status === 200) {
                alert("Profile updated successfully!");
                navigate("/ProfileSetting"); // Redirect to profile settings or wherever appropriate
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile.");
        }
    };

    return (
        <div className='EditPost'>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={gmail}
                    onChange={(e) => setGmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditPost;
