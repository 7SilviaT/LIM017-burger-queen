import React from "react";
import style from "./kitchenbtns.module.css";

const KitchenButtons = ({ setBtnSelect }) => {
  return (
    <div className={style.kitchenButtonsContainer}>
      <button
        className={style.btnWhite}
        onClick={() => setBtnSelect("pedidos en mesa")}
      >
        PEDIDOS EN MESA
      </button>
      <button
        className={style.btnRed}
        onClick={() => setBtnSelect("en preparacion")}
      >
        EN PREPARACIÓN
      </button>
      <button
        className={style.btnGreen}
        onClick={() => setBtnSelect("despacho")}
      >
        DESPACHO
      </button>
    </div>
  );
};
export default KitchenButtons;
