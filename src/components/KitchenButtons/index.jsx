import React from "react";
import style from "./kitchenbtns.module.css";

const KitchenButtons = ({ setBtnSelect }) => {
  return (
    <div className={style.kitchenButtonsContainer}>
      <button
        className={style.btnRed}
        onClick={() => setBtnSelect("pedidos en mesa")}
      >
        pedidos en mesa
      </button>
      <button
        className={style.btnBlue}
        onClick={() => setBtnSelect("en preparacion")}
      >
        en preparacion
      </button>
      <button
        className={style.btnYellow}
        onClick={() => setBtnSelect("despacho")}
      >
        despacho
      </button>
    </div>
  );
};
export default KitchenButtons;
