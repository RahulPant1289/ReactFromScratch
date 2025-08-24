import React from "react";

class TestClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor of", this.props.name);
  }

  render() {
    console.log("Render of", this.props.name);
    return <h1>{this.props.name}</h1>;
  }

  componentDidMount() {
    console.log("ComponentDidMount of", this.props.name);
  }
}

export default TestClass;
