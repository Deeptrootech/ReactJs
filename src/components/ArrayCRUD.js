import React, { useState } from "react";

function ArrayCRUD() {
  const initialValue = "";
  const [fruit, FruitsReflect] = useState(initialValue); // state for reflecting entered value in input tag
  const [fruitlist, setFruitsList] = useState(["fruit1", "fruit2"]); // state for add entered value in array

  const AddFruitsInArray = (e) => {
    e.preventDefault();
    setFruitsList([...fruitlist, fruit]);
    FruitsReflect(""); // Clear the input field after adding the fruit
  };
  const UpdateFruit = (updateindex, updatevalue) => {
    const allFruitItems = [...fruitlist]
    allFruitItems[updateindex] = updatevalue
    setFruitsList(allFruitItems);
  };
  const removeFruit = (removeindex) => {
    const updatedItems = fruitlist.filter(
      (item, item_index) => item_index !== removeindex
    );
    setFruitsList(updatedItems);
  };

  return (
    <div>
      <form onSubmit={AddFruitsInArray}>
        <input
          type='text'
          value={fruit}
          name='myfruit'
          onChange={(e) => {
            FruitsReflect(e.target.value);
          }}
        />
        <input
          type='submit'
          style={{ background: "#00800087" }}
          value={"Submit"}
        />
      </form>
      <div>
        <h1>Fruits List:</h1>
        <ol>
          {fruitlist.map((item, index) => (
            <li key={index}>
              <input
                type='text'
                value={item}
                name='updatefruit'
                onChange={(e) => {
                  UpdateFruit(index, e.target.value);
                }}
              />
              
              <input
                style={{ background: "#ff000094" }}
                type='button'
                value='delete'
                onClick={() => removeFruit(index)}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ArrayCRUD;
