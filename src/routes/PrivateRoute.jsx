import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

import AuthContext from "../context/auth/AuthContext";

const PrivateRoute = ({ children }) => {
  const {
    state: { isAuth, consultando }    
  } = useContext(AuthContext);
  console.log('mira al state', isAuth, consultando);

  if (consultando) return <h1>Cargando ....</h1>;

  return <>{isAuth ? children : <Navigate to="/" />}</>;
};

export default PrivateRoute;
