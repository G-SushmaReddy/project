
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodrequestschema = new Schema({
    firstname:{
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    organization:{
        type: String,
        required: false,
        trim: true,
        minlength: 3
    },
    organizationid:{
        type: Number,
        required: true,
        trim: true,
    },
    numberofpeople:{
        type: Number,
        required: true,
        trim: true,
    },
    category:{
        type: String,  
        required: true,
        trim: true,
    },
    foodtype:{
        type: String,
        required: true,
        trim: true,
    },
    size:{
        type: String,
        required: true,
        trim: true,
    },
    location:{
        type: String,
        required: true,
        trim: true,
    },
    contact:{
        type: Number,
        required: true,
        trim: true,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})
const Foodrequest = mongoose.model('Foodrequest', foodrequestschema);
module.exports = Foodrequest;