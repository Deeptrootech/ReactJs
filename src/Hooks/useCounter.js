import { useState } from 'react'

function useCounter() {
  const [coount, setcount] = useState(0);

  const handleIncrease = () => {
    console.log("handleIncrease");
    setcount(coount + 1);
  };
  const handleReset = () => {
    console.log("handleReset");
    setcount(0);
  };
  const handleDecrease = () => {
    console.log("handleDecrease");
    setcount(coount - 1);
  };

  return [coount, handleIncrease, handleDecrease, handleReset]
}

export default useCounter