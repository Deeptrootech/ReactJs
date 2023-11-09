import React from 'react'
import './Mystyle.css'


function Stylesheet(props) {
  const ClassName = props.IsPrimary ? 'primary' : ""
  return (
    <div className={`${ClassName} fonts_size`}>Stylesheet Component</div>
  )
}

export default Stylesheet