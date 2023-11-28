import React, { useState } from "react";

function ArrayCRUD() {
  const initialValue = "";
  const [car, CarsReflect] = useState(initialValue);


  const CarsArray = () => {
    console.log("CarsArray");
  };
  return (
    <div>
      <form onSubmit={CarsArray}>
        <input type='text' value={car} onChange={e => {CarsReflect(e.target.value)}} />
        <input type='button' value={"Submit"} />
      </form>
      <div>
        <h1>Motors List:</h1>
        <ol>
          <li>TATA</li>
        </ol>
      </div>
    </div>
  );
}

export default ArrayCRUD;
