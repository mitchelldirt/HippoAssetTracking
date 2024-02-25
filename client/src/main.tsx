import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/Root.tsx";
import Assets from "./routes/Assets.tsx";
import Departments from "./routes/Departments.tsx";
import Employees from "./routes/Employees.tsx";
import Locations from "./routes/Locations.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import { HelmetProvider } from "react-helmet-async";
import AssetEdit from "./routes/AssetEdit.tsx";
// import AssetEdit from "./routes/AssetEdit.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "assets",
        element: <Assets />,
        children: [
          {
            path: "edit",
            element: <AssetEdit />
          }
        ]
      },
      {
        path: "departments",
        element: <Departments/>
      },
      {
        path: "employees",
        element: <Employees />
      },
      {
        path: "locations",
        element: <Locations />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
