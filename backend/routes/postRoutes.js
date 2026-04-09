const express = require("express");
const router = express.Router();
const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require("../controllers/postController");

const { protect } = require("../middleware/authMiddleware");
const { likePost } = require("../controllers/postController");
// Routes
router.post("/", protect, createPost);
router.get("/", getPosts);
router.put("/:id", protect, updatePost);
router.put("/:id/like", protect, likePost);
router.delete("/:id", protect, deletePost);

module.exports = router;