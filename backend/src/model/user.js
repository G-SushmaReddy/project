//create model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstname:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    username:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },      
    token: {
        type: String,
        required: false,
    }


});

const User = mongoose.model('User', userSchema);

module.exports = User;