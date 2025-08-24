import React from "react";
import { Outlet } from "react-router-dom";
const Heading = () => <h1>Learning React...!!!</h1>;
const Description = () => (
  <div>
    <Heading />
    <h1 id="heading">Namaste React</h1>
    <Outlet />
  </div>
);

export default Description;
