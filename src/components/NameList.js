import React from "react";

function NameList() {
  const names = ["bruce", "clerk", "diana"];
  return <div>NameList: {names.map((x) => <h2>{x}</h2>)}</div>;
}

export default NameList;
