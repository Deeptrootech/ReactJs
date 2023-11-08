import React, {Component} from 'react'

class Message extends Component{

  constructor(){
    super()
    this.state = {
      message : "Welcome Visitor"
    }    
  }
  changeMessage(){
    this.setState({
      message : "Thank You For Subscribing..!!"
    })
  }

  render() {
    return (
      <div>
        <h1>From Message Component..!! {this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>ChangeText</button>
      </div>

    )
  }
}

export default Message