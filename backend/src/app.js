require("dotenv").config();
const express = require("express");
const createHttpError = require("http-errors");
const UserRouter = require("./routes/user");
const FoodrequestRouter = require("./routes/foodrequest");
const PostRouter = require("./routes/post");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(fileUpload());
app.use(express.json());

// Serve static files
app.use("/public/posts", express.static("public/posts"));

// Route handlers
app.use("/api/user", UserRouter);
app.use("/api/foodrequest", FoodrequestRouter);
app.use("/api/post", PostRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  if (createHttpError.isHttpError(err)) {
    res.status(err.status).send({ message: err.message });
  } else {
    console.error("Internal Server Error:", err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = app;
