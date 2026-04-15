const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const app = express();
dotenv.config();

// ✅ Middleware FIRST
app.use(express.json());

// ✅ CORS FIX (important)
app.use(cors({
  origin: "*",  // later replace with your Vercel URL
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

// ✅ Test route (for debugging)
app.get("/api/test", (req, res) => {
  res.send("Backend is working 🚀");
});

// ✅ MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// ✅ Socket Setup
const httpServer = require("http").createServer(app);
const { authSocket, socketServer } = require("./socketServer");

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",   // allow all for now
  },
});

io.use(authSocket);
io.on("connection", (socket) => socketServer(socket));



// ✅ Start server LAST
const PORT = process.env.PORT || 4000;

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});