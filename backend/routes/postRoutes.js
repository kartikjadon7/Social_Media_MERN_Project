const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require("./controllers/postController");

const { protect } = require("../middleware/authMiddleware");


router.post("/", protect, createPost);
router.get("/", getPosts);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;