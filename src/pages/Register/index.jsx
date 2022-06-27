import React, { useState, useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";
import PublicTemplate from "../../templates/PublicTemplate";
import styles from "../../styles/publicStyle.module.css";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  position: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const [dataForm, setDataForm] = useState(initialState);

  const { signIn } = useContext(AuthContext);

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });

  };

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

        <button className={styles.button} type="submit">
          Registrarse
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
