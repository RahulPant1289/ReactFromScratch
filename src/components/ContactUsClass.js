import React from "react";
import FunClass from "./FunClass";

class ContactUsClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>{"Parent Render"}</h1>
        <FunClass name={"FunClass 1"} />
      </div>
    );
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
}

export default ContactUsClass;
