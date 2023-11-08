import React from "react";

function ChildComponent(props) {
  return (
    <div>
      ChildComponent: <button onClick={() => {props.greethandler("Deep")}}>Greet parent</button>
    </div>
  );
}

export default ChildComponent;
