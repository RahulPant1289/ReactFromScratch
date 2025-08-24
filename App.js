import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./src/components/ContactUs";
import About from "./src/components/About";
import Fun from "./src/components/Fun";
import Description from "./src/components/Description";
import Posts from "./src/components/Posts";
import PostDetail from "./src/components/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Description />,
    children: [
      {
        path: "/contact",
        element: <ContactUs />,
        children: [
          {
            path: "fun",
            element: <Fun />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <PostDetail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
