import React, { useMemo, useState } from "react";
import "../BMICss.css";

function BmiCalculator() {
  const [height, setHeight] = useState(140);
  const [weight, setWeight] = useState(40);

  const ChangeHeight = (event) => {
    setHeight(event.target.value);
  };
  const ChangeWeight = (event) => {
    setWeight(event.target.value);
  };
  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <div className='container'>
      <h1>BMI CALCULATOR</h1>
      <div className='input-section'>
        <p className=".slider-output">Height: {height} cm </p>
        <input type='range' onChange={ChangeHeight} min={140} max={220} />
        <p className=".slider-output">Weight : {weight} Kg </p>
        <input type='range' onChange={ChangeWeight} min={40} max={220} />
      </div>
      <div className="output-section">
        <p>Your BMI is: </p>
        <p className="output">{output}</p>
      </div>
    </div>
  );
}

export default BmiCalculator;
