import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";

function Notification() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const socket = new WebSocket(
      "ws://127.0.0.1:8000/ws/notification/public_room/"
    );
    socket.onopen = () => {
      console.log("WebSocket connection established.");
      
    };
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, message]);

      console.log(message);
    };
    socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };
    return () => {
      socket.close();
    };
  }, []);
  return <div>Notification: {messages}</div>;

}
export default Notification;
