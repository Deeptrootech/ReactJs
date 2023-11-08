import React from 'react'

function FunctionClick() {

  function ClickHandler(){
    console.log("This is click handler function");
  }

  return (
    <div>
    FunctionClick : <button onClick={ClickHandler}>Click</button>
    </div>

  )
}

export default FunctionClick