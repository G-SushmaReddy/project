const mongoose = require('mongoose');

const FoodPostSchema = new mongoose.Schema({
    name: { type: String, required: true },
    size: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true },
    category: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('FoodPost', FoodPostSchema);
