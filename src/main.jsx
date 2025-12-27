import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Root/Roots.jsx";
import ErrorPage from "./component/ErrorPage/ErrorPage.jsx";
import Home from "./component/Home/Home.jsx";
import ProjectTab from "./component/Page.jsx/ProjectTab.jsx";
import ProjectDetails from "./component/Page.jsx/ProjectDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/project",
        element: <ProjectTab />,
      },
      {
        path: "/project_details/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StrictMode>
);
