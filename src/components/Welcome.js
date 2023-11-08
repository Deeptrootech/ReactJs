import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    const {name, children} = this.props
    return <h1>Welcome Class Component-- <br></br>name:{name} <br></br>Children:{children}</h1>
  }
}
export default Welcome