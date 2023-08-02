const Post = require("../Model/Post");

const createPost = async (req, res) => {
  console.log(req.body);
  const { image, name, location, description } = req.body;

  if (!image || !name || !location || !description) {
    console.log("Invalid data passed into request!");
    return res.status(400);
  }
  const post = new Post({
    image: image,
    name: name,
    location: location,
    description: description
  });
  post
    .save()
    .then((record) => {
      res.status(201).json({
        message: "post created successfully",
        data: record
      });
    })
    .catch((err) => {
      res.status(500).json({
        errorDesc: "Failed to create a post!",
        error: err
      });
    });
};

const getPost = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get post"
    });
  }
};

module.exports = { createPost, getPost };
