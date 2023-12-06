import React from 'react'

function Childthree({children, name}) {
  console.log("Child3 Component");

  return (
    <div>Childthree: {children} {name}</div>
  )
}


export default React.memo(Childthree)