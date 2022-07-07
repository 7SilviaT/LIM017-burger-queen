import React, { useContext } from "react";
import style from "./kitchenbtns.module.css";

const KitchenButtons = ({ setBtnSelect }) => {
  return (
    <div className={style.btnContainer}>
      <button
        className={style.btnWhite}
        onClick={() => setBtnSelect("pedidos en mesa")}
      >
        pedidos en mesa
      </button>
      <button
        className={style.btnOrange}
        onClick={() => setBtnSelect("en preparacion")}
      >
        en preparacion
      </button>
      <button
        className={style.btnGreen}
        onClick={() => setBtnSelect("despacho")}
      >
        despacho
      </button>
    </div>
  );
};
export default KitchenButtons;