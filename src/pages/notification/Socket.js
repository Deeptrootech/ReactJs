const socket = new WebSocket(
  "ws://127.0.0.1:8000/ws/notification/public_room/"
);

socket.onopen = () => {
  console.log("WebSocket connection established.");
};

socket.onclose = () => {
  console.log("WebSocket connection closed.");
};