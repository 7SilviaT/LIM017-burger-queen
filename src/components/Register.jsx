import React from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { authContext } from '../context/AuthContext';

const Register = () =>{
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error,setError]=useState();

  const contextValue = useContext(authContext);
  const navigate= useNavigate();


  const handleSubmit= (e) =>{
      e.preventDefault();  
      setError('');    

    console.log(email, password);
    contextValue.signup(email, password)
    .then ( ()=>navigate('/Login'))
    .catch((error)=>{
      console.log(error.code,'imprimimos algo en register');
      switch(error.code){
        case '':
          setError ('Campo vacío.Ingrese su email');
          break
        case 'auth/invalid-email':
            setError('Correo inválido');
            break;
        case 'auth/email-already-in-use':
            setError('Cuenta ya en uso');
            break;
        case 'auth/weak-password':
            setError('Contraseña debe contener mínimo 6 dígitos');
        break;
        default:setError ('Otro error');
    } 
    })
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
          required
          />
          <input 
          type='password' 
          className='register-inputs' 
          onChange={e=>setPassword(e.target.value)} 
          placeholder='contraseña'
          required
          />
          <input 
          type='password' 
          className='register-inputs' 
          onChange={e=>setPassword(e.target.value)} 
          placeholder='repetir contraseña'
          required
          />
           <p>{error}</p>         
          <button className='register-button' type='submit' onClick={handleSubmit}>
              Registrarse
          </button>
     <p>
        Ya tienes cuenta?
        <Link to= '/Login' className='register-link'>
          Inicia sesion
        </Link>
      </p>
      </form>
  </div>
    )
} 
export default Register;