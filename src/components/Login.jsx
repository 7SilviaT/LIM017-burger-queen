import React from 'react';
import { useState, useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';

const Login = () =>{
    //const [user,setUser]=useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error,setError]=useState();
    
    const contextValue = useContext(authContext);
    const navigate= useNavigate();
 
    const handleSubmit= (e) =>{
        e.preventDefault();   
        setError('');

        contextValue.login(email, password)
        .then ( ()=>navigate('/HomeMain'))
        .catch ((error) => {
            console.log(error.code,'imprimimos algo en login');
            switch(error.code){
                case '':
                    setError('Campos vacíos.Ingrese correo y contraseña');
                    break;
                case 'auth/user-not-found':
                    setError('Usuario no registrado');
                    break;
                case 'auth/wrong-password':
                    setError('Contraseña inválida.Intente nuevamente');
                    break;
                case 'auth/invalid-email':
                    setError('Ingrese un correo válido');
                break;
                default:setError ('Otro error');
            }
        })
      };   
    return(
        <div className='login-page'>
            <form className='login-container' onSubmit={handleSubmit}>
                <h2>INICIAR SESIÓN</h2>
                <hr></hr>
                <input 
                type='email' 
                className='login-inputs' 
                onChange={e=>setEmail(e.target.value)} 
                placeholder='juanperez@bq.com'
                required
                />
                
                <input 
                type='password' 
                className='login-inputs' 
                onChange={e=>setPassword(e.target.value)} 
                placeholder='contraseña'
                required
                />

                <select id ='user' className='select-user'>
                <option defaultValue={'nadie'}>Seleccione su cargo</option>
                <option value='Mesero'>Mesero</option>
                <option value='Admin'>Admin</option>
                <option value='Cocina'>Cocina</option>
                </select>
                
                <p>{error}</p>
                <button className='login-button' type= 'submit'>
                    Inicia sesión
                </button>                       
                    <p> No tienes cuenta?<Link to='/Register' className='login-link'>Registrarse</Link></p>       
            
                </form> 
                </div>  
    )
};
export default Login;
