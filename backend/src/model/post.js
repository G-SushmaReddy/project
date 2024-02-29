
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    content:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    image:{
        type: String,
        required: false,
        trim: true,
        minlength: 3
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    postedBy:{
        type: String,
        required: true,
        trim: true,
        // minlength: 3
    }

})
const Post = mongoose.model('Post', postSchema);
module.exports = Post;