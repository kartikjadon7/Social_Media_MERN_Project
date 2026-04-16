const { Server } = require("socket.io");
const { socketServer, authSocket } = require("./socketServer");

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // allow frontend (Vercel)
      methods: ["GET", "POST"],
    },
  });

  // 🔐 Apply auth middleware
  io.use(authSocket);

  // 🔌 Handle connection
  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socketServer(socket);

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
};

module.exports = setupSocket;