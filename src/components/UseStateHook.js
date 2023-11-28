import React, { useState } from "react";

function NameApp() {
  const [name, setName] = useState({ FirstName: "Deep", LastName: "Pathak" });

  return (
    <div>
      <form>
        <input
          type='text'
          value={name.FirstName}
          onChange={(e) => setName({...name, FirstName: e.target.value})}
          placeholder='Your FirstName'
        />
        <input
          type='text'
          value={name.LastName}
          onChange={(e) => setName({...name, LastName: e.target.value})}
          placeholder='Your LastName'
        />
        <p>Entered FirstName: {name.FirstName}</p>
        <p>Entered LastName: {name.LastName}</p>
      </form>
    </div>
  );
}
export default NameApp;
