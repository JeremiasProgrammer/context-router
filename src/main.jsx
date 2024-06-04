import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import UserProvider from "./context/UserContext";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    </React.StrictMode>
);
