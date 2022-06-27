import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../context/auth/AuthContext';

const PublicRoute = ({ children }) => {
  // const [isAuth] = useState(false);

  const { state: { isAuth, consultando } } = useContext(AuthContext);
  // console.log('mira al state desde la ruta publica', isAuth);

  if (consultando) return <h1>Cargando ....</h1>

  return <>{isAuth ? <Navigate to='/home' /> : children}</>;
};

export default PublicRoute;
