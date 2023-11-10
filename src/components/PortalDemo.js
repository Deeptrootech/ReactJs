import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(<h1>PortalDemo:<a href="https://codesandbox.io/s/00254q4n6p?file=/src/end.js" target="blank">With Creating Model Example</a></h1>, document.getElementById("portal-root"));
}

export default PortalDemo;
