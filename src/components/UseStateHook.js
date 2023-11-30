import React, { useState } from "react";

function NameApp() {
  const [name, setName] = useState({ FirstName: "Deep", LastName: "Pathak" });

  return (
    <div>
      <h1>
        <a href="https://stackoverflow.com/questions/53219164/what-s-the-difference-between-usestate-and-useeffect" target="blank">Best Answer on Usestate vs UseEffect</a>
      </h1>
      <form>
        <input
          type='text'
          value={name.FirstName}
          onChange={(e) => setName({ ...name, FirstName: e.target.value })}
          placeholder='Your FirstName'
        />
        <input
          type='text'
          value={name.LastName}
          onChange={(e) => setName({ ...name, LastName: e.target.value })}
          placeholder='Your LastName'
        />
        <p>Entered FirstName: {name.FirstName}</p>
        <p>Entered LastName: {name.LastName}</p>
      </form>

      <h1>Same work as Class methods this.state and setState().</h1>
      <h3>(that is used to contain data or information about the component)</h3>
    </div>
  );
}
export default NameApp;
