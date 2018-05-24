import React from "react";

class Hello extends React.Component {
    render() {
        // TODO
        return <div>hello from {this.props.firstName} {this.props.lastName}</div> // this.props.name value comes from name attribute
    }
}

export default Hello;