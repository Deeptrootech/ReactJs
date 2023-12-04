import React from 'react'

function Count({text, count}) {
  console.log("Count component");

  return (
    <div>{text} - {count}</div>
  )
}

export default React.memo(Count)