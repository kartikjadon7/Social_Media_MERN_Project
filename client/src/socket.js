import { io } from "socket.io-client";
import { BASE_URL } from "../config";
import { isLoggedIn } from "./authHelper";

export let socket;

export const initiateSocketConnection = () => {
  const user = isLoggedIn();

  socket = io(BASE_URL, {
    path: "/socket.io",
    transports: ["websocket"],
    auth: {
      token: user?.token,
    },
  });

  socket.on("connect", () => {
    console.log("Connected to socket:", socket.id);
  });

  socket.on("connect_error", (err) => {
    console.error("Socket error:", err.message);
  });
};

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};