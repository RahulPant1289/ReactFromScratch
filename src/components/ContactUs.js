import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <h1>ContactUs</h1>
      <Outlet />
    </div>
  );
};

export default ContactUs;
