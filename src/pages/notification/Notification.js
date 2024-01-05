import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";
import "./Socket";

function Notification() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // ############ Socket message send and receive ##################
  const socket = new WebSocket(
    "ws://127.0.0.1:8000/ws/notification/public_room/"
  );
  socket.onmessage = (event) => {
    debugger;
    const message = JSON.parse(event.data).message;
    setMessages((prevMessages) => [...prevMessages, message]);
    console.log(message);
  };
  // ##################################################################

  return <div>Notification: {messages}</div>;
}
export default Notification;
