require("dotenv").config(); // moved to top

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// ✅ Middleware FIRST
app.use(express.json());

// ✅ CORS (same as yours, no change)
app.use(cors({
  origin: "*",
  credentials: true
}));

// ✅ Routes
const posts = require("./routes/posts");
const users = require("./routes/users");
const comments = require("./routes/comments");
const messages = require("./routes/messages");

app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/comments", comments);
app.use("/api/messages", messages);

// ✅ Test route
app.get("/api/test", (req, res) => {
  res.send("Backend is working ");
});

app.get("/", (req, res) => {
  res.send("Welcome to Social Media API 🚀");
});

// ✅ MongoDB (improved error handling only)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.log("MongoDB connection error:");
    console.log(err.message);
  });

// ✅ Socket Setup
const httpServer = require("http").createServer(app);
const { authSocket, socketServer } = require("./socketServer");

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
  },
});

io.use(authSocket);
io.on("connection", (socket) => socketServer(socket));



// ✅ Start server LAST
const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});