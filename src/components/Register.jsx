import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { authContext } from '../context/AuthContext';

const Register = () =>{
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  //const  signup = useAuth;
  const contextValue = useContext(authContext);
    console.log(contextValue);
  const navigate= useNavigate();

/*   const handleChange =({target:{name,value}}) =>
  setUser({ ...user, [name]: value }); */

  const handleSubmit= async (e) =>{
      e.preventDefault();      
  try {
    console.log(email, password);
    await contextValue.signup(email, password);
    navigate('/HomeMain');
  } catch (error) {
    console.log(error.message);
/*     if(error.code === 'auth/internal-error'){
    setError('Correo inválido');
  } */
  }
};
    return(
      <div className='register-page'>
      <form className='register-container' onSubmit={handleSubmit}>
          <h2>REGISTRARSE</h2>
          <input 
          type='email' 
          className='register-inputs' 
          onChange={e=>setEmail(e.target.value)} 
          placeholder='juanperez@bq.com'
          />
          <input 
          type='password' 
          className='register-inputs' 
          onChange={e=>setPassword(e.target.value)} 
          placeholder='contraseña'/>
                    
          <button className='register-button'>
              Registrarse
          </button>
     <p>
        Ya tienes cuenta?
        <button><Link to="/Login" className='login-link'></Link>
          Inicia sesion
        </button>
      </p>
      </form>
  </div>
    )
} 
export default Register;