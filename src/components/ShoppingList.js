import React, { useState } from "react";
import "../ShoppingList.css";

function ShoppingList() {
  const [items, setItem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([...items, e.target.new_item.value]);
    e.target.reset();
  };

  const onRemoveItem = (removeindex) => {
    const updatedItems = items.filter(
      (item, item_index) => item_index !== removeindex
    );
    setItem(updatedItems);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='new_item' placeholder='Add New Item' />
        <button type='submit'>Submit</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <div key={index} style={{ display: "flex", margin: "2px" }}>
            <li>{item}</li>
            <button className='delete' onClick={() => onRemoveItem(index)}>
              x
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
