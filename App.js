import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./src/components/ContactUs";
import About from "./src/components/About";

const Heading = () => <h1>Learning React...!!!</h1>;
const Description = () => (
  <div>
    <Heading />
    <h1 id="heading">Namaste React</h1>
    <Outlet />
  </div>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Description />,
    children: [
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
