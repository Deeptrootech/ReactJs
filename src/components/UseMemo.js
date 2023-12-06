import React, { useMemo, useState } from "react";

function UseMemoHook() {
  const [btn1, btn1add] = useState(1);
  const [btn2, btn2add] = useState(0);

  const handleclickbtn1 = () => {
    btn1add(btn1 + 1);
  };
  const handleclickbtn2 = () => {
    btn2add(btn2 + 1);
  };

  const is_even = useMemo(() => { // react will use caches values of btn1 untill it changed
    let i = 0;
    while (i < 2000000000) i++;
    return btn1 % 2 === 0;
  }, [btn1]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button onClick={handleclickbtn1}>Button 1 -- value:{btn1}</button>
        <p>{is_even ? "Even" : "Odd"}</p>
      </div>

      <button onClick={handleclickbtn2}>Button 2 -- value:{btn2}</button>
    </div>
  );
}

export default UseMemoHook;
