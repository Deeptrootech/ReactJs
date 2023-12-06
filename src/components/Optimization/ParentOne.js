import React, { useState } from "react";

const ParentOne = ({ children }) => {
  const [count, setcount] = useState(0);
  console.log("Parent Component");
  return (
    <div>
      {count}
      <button onClick={() => setcount(count + 1)}>Increase</button>
      <button onClick={() => setcount(0)}>Reset</button>
      <button onClick={() => setcount(count - 1)}>Decrease</button>
      {children}
    </div>
  );
};

export default ParentOne;
