import React, { useContext } from "react";
import style from "./header.module.css";
import { AiOutlinePoweroff } from 'react-icons/ai'


import AuthContext from "../../context/auth/AuthContext";

const Header = () => {
  const { state, cerrarSesion } = useContext(AuthContext);

  return (
    <section className={style.container}>
      <div className={style.welcome}>
        <h4>Bienvenido {state.email}</h4>
      </div>
      <div className={style.menu}>
        <ul className={style.list}>
          <li className={style.item}>Estado pedidos</li>
          <li className={style.item}>Cocina</li>
          <li className={style.item}>Admin</li>
        </ul>
        <div className={style.button}>
          <button  onClick={cerrarSesion}><AiOutlinePoweroff /></button>
        </div>
      </div>
    </section>
  );
};

export default Header;
