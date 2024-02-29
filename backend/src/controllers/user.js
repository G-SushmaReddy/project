const UserModel = require('../model/user')
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.login = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    try {
        if (!username || !password) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const fetcheduser = await UserModel.findOne({ username: username }).exec();

        if (!fetcheduser) {
            throw createHttpError(400, 'User does not exist')
        }

        const isPasswordValid = await bcrypt.compare(password, fetcheduser.password);

        if (!isPasswordValid) {
            throw createHttpError(400, 'Invalid credentials')
        }

        const user = await UserModel.findOne({ username: username }).exec();

        const token = jwt.sign(
            {
                user_id: user._id,
                username: user.username,
                firstname: user.firstname,
                lastname: user.lastname,
            },
            process.env.JWT_TOKEN_KEY,
            {
                expiresIn: "4h",
            }
        )

        user.token = token;

        const result = await user.save();

        res.status(200).send(result);

    } catch (error) {
        next(error)
    }
}


exports.register = async (req, res, next) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    console.log(req.body)
    try {
        if (!username || !password || !email || !firstname || !lastname) {
            throw createHttpError(400, 'Missing required parameters')
        }

        const isUserAvailable = await UserModel.findOne({ username: username }).exec();

        if (isUserAvailable) {
            throw createHttpError(400, 'User already exists')
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new UserModel({
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: hashedPassword,
            
        })

        const result = await newUser.save();

        res.status(201).send(result);


    } catch (error) {
        next(error)

    }
   



  

}

