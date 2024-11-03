import React, { useEffect, useState } from 'react';
import FoodPostingForm from './FoodPostingForm';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(false); // State to toggle form visibility
    const [editingPost, setEditingPost] = useState(null); 

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/foodposts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const deletePost = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/api/foodposts/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setPosts(posts.filter(post => post._id !== id));
            } else {
                console.error('Failed to delete post');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const editPost = (post) => {
        setEditingPost(post); // Set the post to be edited
        setShowForm(true); // Show the form
    };

    const updatePost = async (updatedPost) => {
        try {
            const response = await fetch(`http://localhost:3001/api/foodposts/${updatedPost._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedPost),
            });
            if (response.ok) {
                const data = await response.json();
                setPosts(posts.map(post => (post._id === data._id ? data : post))); // Update state with the updated post
                setEditingPost(null); // Clear the editing state
                setShowForm(false); // Hide the form
            } else {
                console.error('Failed to update post');
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };


    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Food Posts</h1>
            <button onClick={() => setShowForm(!showForm)}>Toggle Food Posting Form</button>
            {showForm && (
                <FoodPostingForm 
                    addPost={addPost} 
                    updatePost={updatePost} 
                    editingPost={editingPost} // Pass the post being edited
                    setEditingPost={setEditingPost} // Allow form to clear editing state
                />
            )}
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Size</th>
                        <th>Location</th>
                        <th>Contact</th>
                        <th>Category</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post._id}>
                            <td>{post.name}</td>
                            <td>{post.size}</td>
                            <td>{post.location}</td>
                            <td>{post.contact}</td>
                            <td>{post.category}</td>
                            <td>
                                <button onClick={() => deletePost(post._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Posts;