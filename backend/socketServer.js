const jwt = require("jsonwebtoken");

let users = [];

// 🔐 Auth middleware
const authSocket = (socket, next) => {
  const token = socket.handshake.auth?.token;

  if (!token) {
    return next(new Error("Authentication error"));
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    socket.decoded = decoded;
    next();
  } catch (err) {
    return next(new Error("Authentication error"));
  }
};

// 🔌 Socket logic
const socketServer = (socket) => {
  const userId = socket.decoded.userId;

  // ✅ Remove old connection (avoid duplicates)
  users = users.filter((user) => user.userId !== userId);

  // ✅ Add new user
  users.push({ userId, socketId: socket.id });

  console.log("Connected:", userId);

  // 📩 Send message
  socket.on("send-message", (recipientUserId, username, content) => {
    const recipient = users.find(
      (user) => user.userId == recipientUserId
    );

    if (recipient) {
      socket
        .to(recipient.socketId)
        .emit("receive-message", userId, username, content);
    }
  });

  // ❌ Disconnect
  socket.on("disconnect", () => {
    users = users.filter((user) => user.userId !== userId);
    console.log("Disconnected:", userId);
  });
};

module.exports = { socketServer, authSocket };