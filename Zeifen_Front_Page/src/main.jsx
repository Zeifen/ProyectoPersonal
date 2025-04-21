import { StrictMode } from "react";
/*import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./blog.css";
*/

import ReactDOM from "react-dom/client"; //Se importó ReactDOM
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //Se importaron createBrowserRouterm, RouterProvider
import {
  Home,
  About,
  Routes,
} from "./pages";
import FrontLayout from "./components/FrontLayout";
import UseParams from "./components/UseParams";

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
          path: "/about",
          element: <About />,
        },
        {
          path: "/routes",
          element: <Routes />,
        },
        {
          path: "/routes/path/:user",
          element: <UseParams />,
        },
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
