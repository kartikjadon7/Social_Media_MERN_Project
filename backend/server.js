require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(express.json());

app.use(cors({
  origin: "*",
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

// ✅ Test routes
app.get("/api/test", (req, res) => {
  res.send("Backend is working");
});

app.get("/", (req, res) => {
  res.send("Welcome to Social Media API 🚀");
});

// ✅ MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err.message));

// ✅ Create HTTP server
const httpServer = require("http").createServer(app);

// ✅ Socket.IO
const { authSocket, socketServer } = require("./socketServer");

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  transports: ["websocket", "polling"],
});

// 🔐 Auth middleware
io.use(authSocket);

// 🔌 Connection
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socketServer(socket);

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

// ✅ Start server
const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});