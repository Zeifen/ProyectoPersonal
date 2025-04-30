import { StrictMode } from "react";
//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./css/pricing.css";
//ReactDOM
import ReactDOM from "react-dom/client"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Components
import {
  Home,
  Carrousel,
  Form,
  CV,
  Login
} from "./pages";
import FrontLayout from "./components/FrontLayout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <FrontLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/resume",
          element: <CV />,
        },
        {
          path: "/certificates",
          element: <Carrousel />,
        },
        {
          path: "/contact",
          element: <Form />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {/* 
        {
          path: "/routes/path/:user",
          element: <UseParams />,
        },
        */}
      ],
    },
  ],
);

//Se creó la ruta con ReactDOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
