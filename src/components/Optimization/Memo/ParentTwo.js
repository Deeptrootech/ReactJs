import React, { useState } from "react";
import ChildTwo from "./ChildTwo";

const ParentTwo = () => {
  const [count, setcount] = useState(0);
  const [Name, setName] = useState("Pathak");
  console.log("Parent2 Component");
  return (
    <div>
      {count}
      <button onClick={() => setcount(count + 1)}>Increase</button>
      <button onClick={() => setcount(0)}>Reset</button>
      <button onClick={() => setcount(count - 1)}>Decrease</button>
      < br />
      {Name}
      <button onClick={() => setName("Deep")}>ChangeName</button>
      <ChildTwo name={Name}/>

      <h4>Here, In above code "ChildTWo" should only re-render when name changed other wise dont render</h4>
      <p>For that we passed name as a prop in "ChildTWo" Component from ParentTwo component</p>
      <p>When "name" prop changes "ChildTWo" re-renders otherwise count changes then it Does Not re-renders.</p>
    </div>
  );
};

export default ParentTwo;
