const express = require('express');
const router = express.Router();
const FoodPost = require('C:/Users/reddy/OneDrive/Desktop/Food/Minor_project/backend/src/model/FoodPost.js'); // Ensure your FoodPost schema is set up correctly
const Feedback = require('C:/Users/reddy/OneDrive/Desktop/Food/Minor_project/backend/src/model/Feedback.js');
// POST route to add a new food post

router.post('/api/feedback', async (req, res) => {
    try {
        const newFeedback = new Feedback(req.body);
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ error: 'Failed to submit feedback' });
    }
});


router.post('/', async (req, res) => {
    try {
        const newPost = new FoodPost({
            name: req.body.name,
            size: req.body.size,
            location: req.body.location,
            contact: req.body.contact,
            category: req.body.category,
        });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const posts = await FoodPost.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await FoodPost.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: 'Error deleting post', error });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPost = await FoodPost.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ message: 'Error updating post', error });
    }
});


module.exports = router;
