import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

//import "../styles.css";

const Register = () =>{
  const { signup } = useAuth;

  const [user, setUser]= useState({
    email:'',
    password:'',
  });
  
  const [error,setError]= useState('');
  const navigate= useNavigate();


  const handleSubmit= async (e) =>{
      e.preventDefault();      
      setError('');
  try {
  await signup(user.email, user.password);
    navigate('/Home');
  } catch (error) {
    console.log(error.message);
    if(error.code === 'auth/internal-error'){
    setError('Correo inválido');
  }
  }
};
    return(
      <div className='register-page'>
      <form className='register-container' onSubmit={handleSubmit}>
          <h2>Registro</h2>
          <input 
          type='email' 
          className='register-inputs' 
          onChange={(e) => setUser({...user,email:e.target.value})} 
          placeholder='juanperez@bq.com'
          />
          <input 
          type='password' 
          className='register-inputs' 
          onChange={(e) => setUser({...user,password:e.target.value})} 
          placeholder='contraseña'/>
                    
          <button className='register-button'>
              Registrarse
          </button>
     <p>
        Ya tienes cuenta?
        <Link to="/Login" className='login-link'></Link>
          Inicia sesion
      </p>
      </form>
  </div>
    )
} 
export default Register;