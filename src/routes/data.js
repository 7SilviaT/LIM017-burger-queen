import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";

import Home from "../pages/Home";
import Kitchen from "../pages/Kitchen";

export const listRoute = [
  {
    path: "/",
    element: (
      <PublicRoute>
        <Login />
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
    path: "/kitchen",
    element: (
      <PrivateRoute>
        <Kitchen />
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
