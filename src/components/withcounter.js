import React, { Component } from "react";

const withcounter = (OrigionalComponent, increamentparam = 1) => {
    class WithCounter extends Component {
        constructor() {
            super()
            this.state = { count: 0 }
        }

        IncreamentCount = () => {
            this.setState(prevstate => {
                return { count: prevstate.count + increamentparam }
            })
        }
        render() {
            console.log("Demonstrated with clickCounter and hoverCounter to show HigherOrderComponent");
            return <OrigionalComponent count={this.state.count} increamentCount={this.IncreamentCount} {...this.props} />
        }
    }

    return WithCounter
}

export default withcounter