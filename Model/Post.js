const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  image: {
    type: "string",
    required: true
  },
  name: {
    type: "string",
    required: true
  },
  location: {
    type: "string",
    required: true
  },
  description: {
    type: "string",
    required: true
  },
  likes: {
    type: "number",
    default: 24
  },

  date: { type: Date, default: Date.now }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
