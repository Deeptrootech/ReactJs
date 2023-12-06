import { useState } from 'react'

function useCounter(initialCount, value) {
  const [coount, setcount] = useState(initialCount);

  const handleIncrease = () => {
    console.log("handleIncrease");
    setcount(coount + value);
  };
  const handleReset = () => {
    console.log("handleReset");
    setcount(initialCount);
  };
  const handleDecrease = () => {
    console.log("handleDecrease");
    setcount(coount - value);
  };

  return [coount, handleIncrease, handleDecrease, handleReset]
}

export default useCounter