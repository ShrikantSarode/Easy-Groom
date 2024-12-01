import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Components/Login";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import AdminLogin from "./Components/AdminLogin";

const projectRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/admin-login",
        element: <AdminLogin/>,
      },
    ],
  },
]);

export default projectRouter;
