import React from "react";
import useCounter from "../../Hooks/useCounter";

function CounterOne() {
  // increase decrease reset
  const [coount, Increase, Decrease, Reset] = useCounter(0, 1);
  return (
    <div>
      Count: {coount}
      <button onClick={Increase}>Increase</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={Decrease}>Decrease</button>
    </div>
  );
}

export default CounterOne;
