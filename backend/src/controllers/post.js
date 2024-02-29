const PostModel = require('../model/post')
const UserModel = require('../model/user')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// exports.up = async (req, res, next) => {
//     try {
//         const result = await PostModel.find();
//         //foreach check user id and get user details and add postby field
//         result.forEach(async (element) => {
//             const user = await UserModel.findById(element.user);
//             element.postedBy = user.firstname + " " + user.lastname;
//             await element.save();
//         });
//         res.status(201).send(result);
//     }
//     catch (error) {
//         next(error)
//     }

// }


//save post details
exports.savedetails = async (req, res, next) => {
    const content = req.body.content
    // const image = req.body.image
    // const user = req.body.user

    console.log(req.body)
    try {

        const { image } = req.files;
        if (!image) {
            throw createHttpError(404, "Image not found")
        };
        if (!image.mimetype.startsWith('image')) {
            throw createHttpError(400, 'Only images are allowed');
        }
        let filepath = __dirname + '../../../public/posts/' + image.name
        image.mv(filepath);

        let filepathtoUplaod = '/public/posts/' + image.name






        if (!content) {
            throw createHttpError(400, 'Missing required parameters')
        }

        // let username = req.user.username;

        // console.log(username)

        let postedBy = req.user.firstname + " " + req.user.lastname;

        const newDetails = new PostModel({
            content: content,
            image: filepathtoUplaod,
            user: req.user.user_id,
            postedBy: postedBy  
        })
        const result = await newDetails.save();
        res.status(201).send(result);
    }
    catch (error) {
        next(error)
    }
}

//get all post details
exports.getdetails = async (req, res, next) => {
    try {
        const result = await PostModel.find();
        res.status(201).send(result);
    }
    catch (error) {
        next(error)
    }
}

//delete a post
exports.deletepost = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await PostModel.findByIdAndDelete(id);
        res.status(201).send(result);
    }
    catch (error) {
        next(error)
    }
}
//edit a post
exports.editpost = async (req, res, next) => {
    try {
        const id = req.params.id
        const content = req.body.content
        const image = req.body.image
        const user = req.body.user
        const result = await PostModel.findByIdAndUpdate(id, { content: content, image: image, user: user });
        res.status(201).send(result);
    }
    catch (error) {
        next(error)
    }
}

//get post details according to an id
exports.getdetailsbyid = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await PostModel.findById(id);
        res.status(201).send(result);
    }
    catch (error) {
        next(error)
    }
}

//update post details
exports.update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const content = req.body.content
        const image = req.body.image
        const user = req.body.user
        const result = await PostModel.findByIdAndUpdate(id, { content: content, image: image, user: user });
        res.status(201).send(result);
    }
    catch (error) {
        next(error)
    }
}

