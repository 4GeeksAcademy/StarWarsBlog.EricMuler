import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { StoreProvider } from "./hooks/useGlobalReducer";


ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>
);
