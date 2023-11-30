import { useState, useEffect } from "react";

function CountApp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You have clicked the button ${count} times`);
  });

  return (
    <div>
      <h1>
        <a href="https://stackoverflow.com/questions/53219164/what-s-the-difference-between-usestate-and-useeffect" target="blank">Best Answer on Usestate vs UseEffect</a>
      </h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1>Same work as Class methods Lifecycle Methods. like Mount, unmount etc..</h1>
    </div>
  );
}
export default CountApp;
