require("dotenv").config();
const express = require("express");
const createHttpError = require("http-errors");
const UserRouter = require("./routes/user");
const FoodrequestRouter = require("./routes/foodrequest");
const foodPostsRoutes = require('./routes/foodPosts');
const PostRouter = require("./routes/post");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();

app.use(cors({ origin: '*' }));
app.use(fileUpload());
app.use(express.json());
app.use('/api/foodposts', foodPostsRoutes); 

// Serve static files
app.use("/public/posts", express.static("public/posts"));

app.post('/api/feedback', async (req, res) => {
  try {
      // Assuming you have a Feedback model for MongoDB
      const feedback = new Feedback(req.body);
      await feedback.save();
      res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Error submitting feedback', error });
  }
});
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
