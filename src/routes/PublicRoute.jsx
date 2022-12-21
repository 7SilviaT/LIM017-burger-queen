import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from '../context/auth/AuthContext';

const PublicRoute = ({ children }) => {
  // const [isAuth] = useState(false);

  const { state: { isAuth, consultando,position } } = useContext(AuthContext);
  console.log('mira al state desde la ruta publica', isAuth,consultando,position);

  if (consultando) return <h1>Cargando ....</h1>

  return <>{
      isAuth && position === 'kitchen' ?
       <Navigate to='/kitchen' /> : 
       position === 'admin' ? 
       <Navigate to='/home' /> : 
       position === 'waiter' ? 
       <Navigate to='/home' /> : children
        }</>;
};

export default PublicRoute;
