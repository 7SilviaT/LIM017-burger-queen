import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Loigin from "../pages/Login";
import Register from "../pages/Register";

import Home from "../pages/Home";

export const listRoute = [
  {
    path: "/",
    element: (
      <PublicRoute>
        <Loigin />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <p>No se encontró la página consultada</p>
      </div>
    ),
  },
];
