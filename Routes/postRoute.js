const express = require("express");
const { createPost, getPost } = require("../Controllers/Post");

const router = express.Router();

router.route("/new").post(createPost);
router.route("/").get(getPost);

module.exports = router;
