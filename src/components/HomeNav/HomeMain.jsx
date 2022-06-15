import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

//import 'import "../styles.css";';

export const Home =() =>{
    const { logout, user } = useAuth();
    const navigate= useNavigate();

    const handleLogout = async () => {
        try {
          await logout();
          navigate ('/Login');
        } catch (error) {
          console.error(error.message);
        }
      };
    
    return(
        <div className='home-page'>
            Navegacion
            <nav>
                <p className='welcome-text_nav'> Bienvenido {user.displayName || user.email} </p>
                <ul>
                    <li>Pedidos</li>
                    <li>Cocina</li>
                    <li>Admin Menu</li>
                </ul>
                <button onClick={handleLogout}>Cerrar sesión</button>
            </nav>
        </div>
    );
}

export default Home;