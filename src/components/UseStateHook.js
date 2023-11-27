import React, { useState } from 'react';  
  
function NameApp() {  
  const [name, setName] = useState("DefaultName");  
  
  return (  
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <p>Entered name: {name}</p>
      </form>
    </div> 
  );  
}  
export default NameApp;