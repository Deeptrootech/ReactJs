import React, { memo } from 'react'

function ChildTWo() {
  console.log("Child2 Component");

  return (
    <div>ChildTWo</div>
  )
}

export default memo(ChildTWo)