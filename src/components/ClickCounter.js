import React, { Component } from "react";
import withcounter from "./withcounter";

class ClickCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.increamentCount}>{this.props.name} Clicked {this.props.count} Times</button>
            </div>
        )
    }
}


export default withcounter(ClickCounter)