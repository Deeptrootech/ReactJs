import { useState, useEffect, useRef } from "react";

// Example 1
// function UseRefImplement() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => { // useEfect will be called after DOM renders successfully.
//     count.current = count.current + 1;
//     // here "count" variable is from useRef() so when it changes, whole component will not re-rendered.
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }

// Example 2
function UseRefImplement() {
  const inputElement = useRef();
  console.log("Component rendered");
  // you can verify component will not re-render if I click focus input 
  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}


export default UseRefImplement;