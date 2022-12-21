import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import PublicTemplate from "../../templates/PublicTemplate";
import styles from "../../styles/publicStyle.module.css";

const initialState = {
  email: "",
  position: "",
  password: "",
};

const Login = () => {
  const [dataForm, setDataForm] = useState(initialState);

  const { logIn } = useContext(AuthContext);

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("los datos para el registro son:");
    console.log(dataForm);
    const { email, position, password } = dataForm;
    logIn(email, password);
  };

  return (
    <PublicTemplate>
      <form className={styles.boxForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>INICIAR SESIÓN</h2>
        <input
          type="email"
          className={styles.input}
          placeholder="juanperez@bq.com"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          className={styles.input}
          placeholder="contraseña"
          name={"password"}
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

        <button className={styles.button} type="submit">
          Ingresar
        </button>
        <p className={styles.link}>
          {" "}
          No tienes cuenta?&nbsp;
          <Link to="/register">Regístrate</Link>
        </p>
      </form>
    </PublicTemplate>
  );
};

export default Login;
