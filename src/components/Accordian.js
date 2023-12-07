import React, { useState } from "react";
import "../accordian.css";

function Accordian({ items }) {
  const [togleIndex, setTogleIndex] = useState(-1);

  const toggleClick = (index) => {
    togleIndex  === index ? setTogleIndex(-1) : setTogleIndex(index);
  };

  return (
    <div className="container">
      {items.map((eact_item, index) => (
        <div key={index}>
          <div className='each_container'>
            <p>{eact_item.title}</p>
            <button onClick={() => toggleClick(index)}>+</button>
          </div>
          {index === togleIndex && <p>{eact_item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordian;
