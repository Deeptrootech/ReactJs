import React, { Component } from 'react'
import withcounter from './withcounter'

class HoverCounter extends Component {
    render() {
        return (
            <div onMouseOver={this.props.increamentCount}>{this.props.name} Hovered {this.props.count} times.</div>

        )
    }
}

export default withcounter(HoverCounter, 10)