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

router.post("/", protect, createPost);
router.get("/", getPosts);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);
router.put("/:id/like", protect, likePost);
module.exports = router;