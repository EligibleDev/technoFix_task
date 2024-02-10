import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import UserDetails from "../../pages/UserDetails/UserDetails";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/users/:id",
                element: <UserDetails />,
            },
        ],
    },
]);

export default MainRouter;
