import React, { useState } from "react";

class ComponentOne extends React.Component {
    componentDidMount() {
        console.log('Mounted');
    }

    componentWillUnmount() {
        console.log('Will unmount');
    }

    render() {
        return <div>Lifecycle Class</div>;
    }
}
class ComponentTwo extends React.Component {
    state = { display: true };
    delete = () => {
        this.setState({ display: false });
    };

    render() {
        let comp;
        if (this.state.display) {
            comp = <ComponentOne />;
        }
        return (
            <div>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
                <h1>
                    <a href="https://stackoverflow.com/questions/53219164/what-s-the-difference-between-usestate-and-useeffect" target="blank">Best Answer on Usestate vs UseEffect</a>
                </h1>
            </div>
        );
    }
}
export default ComponentTwo;
