import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => <h1>Learning react...!!!</h1>;
const Description = () => (
  <div>
    <Heading />
    <h1 id="heading">Namaste React</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Description />);
