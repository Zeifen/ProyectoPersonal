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
          path: "/about",
          element: <About />,
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
