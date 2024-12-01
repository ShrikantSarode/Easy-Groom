import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { RouterProvider } from "react-router-dom";
import projectRouter from "./projectRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<RouterProvider router={projectRouter}/>
);
