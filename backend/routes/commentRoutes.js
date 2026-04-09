const express = require("express");
const router = express.Router();
const {
  addComment,
  getComments,
} = require("../controllers/commentController");

const { protect } = require("../middleware/authMiddleware");

// Routes
router.post("/:postId", protect, addComment);
router.get("/:postId", getComments);

module.exports = router;