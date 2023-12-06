import React, { useEffect, useState } from "react";
import useUpdateDOMTitle from "../../Hooks/useUpdateDOMTitle";

function UpdateDOMTitleTwo() {
  const [count, setcount] = useState(0);
  const IncreaseCount = () => {
    setcount(count + 1);
  };
  useUpdateDOMTitle(count)
  return (
    <div>
      <button onClick={IncreaseCount}>{count}</button>
    </div>
  );
}

export default UpdateDOMTitleTwo;
