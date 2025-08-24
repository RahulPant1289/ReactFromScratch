import React from "react";
import TestClass from "./TestClass";

class FunClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor of", this.props.name);
  }

  render() {
    console.log("Render of", this.props.name);
    return (
      <div>
        <h1>{this.props.name}</h1>
        <TestClass name={"Test Class 1"} />
        <TestClass name={"Test Class 2"} />
      </div>
    );
  }

  componentDidMount() {
    console.log("ComponentDidMount of", this.props.name);
  }
}

export default FunClass;
