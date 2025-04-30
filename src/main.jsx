import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
/**
 * i am building a front end application using react js and react router and firebase
 * there will be 3 layout and some pages
 * give me industry standard project structure layout
 * we are using vite-react
 */