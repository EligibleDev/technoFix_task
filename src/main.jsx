import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routers/MainRouter/MainRouter";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Toaster />
        <RouterProvider router={MainRouter} />
    </React.StrictMode>
);
