import React, { useState, useContext} from "react";
import AuthContext from "../../context/auth/AuthContext";
import PublicTemplate from "../../templates/PublicTemplate";
import styles from "../../styles/publicStyle.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const initialState = {
  email: "",
  position: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [dataForm, setDataForm] = useState(initialState);
  const [errorMessage,setErrorMessage] =useState('');


  const { signIn,error } = useContext(AuthContext);

const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    
    /* if( e.target.name === 'password'|| e.target.name ==='confirmPassword'){
      console.log(dataForm.password)
      console.log(dataForm.confirmPassword)
     
      //setErrorMessage(dataForm.password!==dataForm.confirmPassword ? 'Las contraseñas no coinciden' : '')
      // dataForm.password!=dataForm.confirmPassword ? setErrorMessage('Las contraseñas no coinciden') : setErrorMessage('');
    }
    setDataForm((prev)=> ({ ...prev,[e.target.name]: e.target.value })); */
  };

  useEffect(()=>{
    if(dataForm.password!==dataForm.confirmPassword){
    setErrorMessage('Las contraseñas no coinciden') 
  }
  else {
    setErrorMessage('')
  } },[dataForm])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("los datos para el registro son:");
    console.log(dataForm);
    const { email, position, password } = dataForm;
    signIn({ email, position, password });
  };

 
  return (
    <PublicTemplate>
      <form className={styles.boxForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>REGISTRARSE</h2>
        <input
          type="email"
          className={styles.input}
          placeholder="juanperez@bq.com"
          name="email"
          onChange={handleChange}
        />

        <select
          id="user"
          className={styles.input}
          name={"position"}
          onChange={handleChange}
        >
          <option defaultValue={"nadie"}>Seleccione su cargo</option>
          <option value="waiter">Mesero</option>
          <option value="admin">Admin</option>
          <option value="kitchen">Cocina</option>
        </select>

        <input
          type="password"
          className={styles.input}
          placeholder="contraseña"
          name={"password"}
          onChange={handleChange}
        />
        <input
          type="password"
          className={styles.input}
          placeholder="confirmar contraseña"
          name={"confirmPassword"}
          onChange={handleChange}
        />
       <p>{error}</p>
       <p>{errorMessage}</p>
       

        <button className={styles.button} type="submit">
          Crear cuenta
        </button>
        <p className={styles.link}>
          {" "}
          Ya tienes cuenta?&nbsp;
          <Link to="/">Inicia Sesión</Link>
        </p>
      </form>
    </PublicTemplate>
  );
};

export default Register;
