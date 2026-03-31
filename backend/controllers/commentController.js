const Comment = require("../models/Comment");

// Add Comment
exports.addComment = async (req, res) => {
  try {
    const { text } = req.body;

    const comment = await Comment.create({
      post: req.params.postId,
      user: req.user._id,
      text,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Comments for a Post
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};