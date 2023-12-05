import React, { useState } from "react";
import ChildThree from "./childThree";

const ParentThree = () => {
  const [count, setcount] = useState(0);
  const [Name, setName] = useState("Pathak");
  console.log("Parent3 Component");
  return (
    <div>
      {count}
      <button onClick={() => setcount(count + 1)}>Increase</button>
      <button onClick={() => setcount(0)}>Reset</button>
      <button onClick={() => setcount(count - 1)}>Decrease</button>
      < br />
      {Name}
      <button onClick={() => setName("Deep")}>ChangeName</button>
      <ChildThree name={Name}><p>Hello</p></ChildThree>


      <h4>conclusion: No Need to wrape a child component with React memo if child component also having a child component</h4>
      <h4>hare, "P" tag will always sent as a new reference so, will always re-render everytime.</h4>
      </div>
  );
};

export default ParentThree;

