import React from 'react'

function Title() {
  console.log("Title component");
  return (
    <div>UseCallback Hook Implementation</div>
  )
}

export default React.memo(Title)