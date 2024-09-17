const UserModel = require("../model/user");
const createHttpError = require("http-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      throw createHttpError(400, "Missing required parameters");
    }

    const user = await UserModel.findOne({ username }).exec();

    if (!user) {
      throw createHttpError(400, "User does not exist");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw createHttpError(400, "Invalid credentials");
    }

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
    );

    // Send the token and user info in the response
    res.status(200).json({
      user: {
        user_id: user._id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
      },
      token,
    });
  } catch (error) {
    console.error("Login error:", error); // Log the error for debugging
    next(error);
  }
};

exports.register = async (req, res, next) => {
  const { firstname, lastname, username, email, password } = req.body;

  try {
    if (!username || !password || !email || !firstname || !lastname) {
      throw createHttpError(400, "Missing required parameters");
    }

    const isUserAvailable = await UserModel.findOne({ username }).exec();

    if (isUserAvailable) {
      throw createHttpError(400, "User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });

    const result = await newUser.save();

    res.status(201).json(result);
  } catch (error) {
    console.error("Registration error:", error); // Log the error for debugging
    next(error);
  }
};
