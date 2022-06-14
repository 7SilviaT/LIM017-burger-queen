import React from 'react';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

//import "./styles.css";

const Login =() =>{
    const [user, setUser]= useState({
        email:'',
        password:'',
    });
    const { login } = useAuth();
    const [error,setError]= useState();
    const navigate= useNavigate();
 
    const handleChange =({target:{name,value}}) =>
setUser({ ...user, [name]: value });

    const handleSubmit= async (e) =>{
        e.preventDefault();      
        setError('');
    try {
    await login(user.email, user.password);
      navigate('/Login');
    } catch (error) {
        console.log(error.code);
        if(error.code === 'auth/internal-error'){
        /* switch(error){
            case 'auth/invalid-email':
                setError('Correo inválido');
                break;
            case 'auth/email-already-in-use':
                setError('Cuenta ya en uso');
                break;
            case 'auth/weak-password':
                setError('Contraseña debe contener mínimo 6 dígitos');
            break;
            default:
        } */
    setError(error.message);
    }
  };
    }
const navigateOrders=useNavigate()
const btnHome =()=>{
    navigateOrders('/Home');
}

    return(
        <div className='login-page'>
            <form className='login-container' onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                <input type='email' className='login-inputs' 
                onChange={handleChange} placeholder='juanperez@bq.com'/>
                <input type='password' className='login-inputs' 
                onChange={handleChange} placeholder='contraseña'/>
                <select id ='user' className='select-user'>
                <option disabled selected>Seleccione su cargo</option>
                <option value='Mesero'>Mesero</option>
                <option value='Admin'>Admin</option>
                <option value='Cocina'>Cocina</option>
            </select>
                
                <button className='login-button' type= 'submit' onClick={btnHome}>
                    Inicia sesión
                </button>
                          
                    <p> No tienes cuenta?
                    <button type= 'submit'><Link to='/Register' className='login-link'>Register</Link></button>
                    </p>                 
            
                </form> 
                </div>  
    )
};
export default Login;
