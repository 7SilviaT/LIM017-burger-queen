import React, { useContext } from "react";
import style from "./kitchenbtns.module.css";

const KitchenButtons = ({ setBtnSelect }) => {
  return (
<<<<<<< HEAD
    <div className={style.btnContainer}>
      <button
        className={style.btnWhite}
=======
    <div>
      <button
        className={style.btnRed}
>>>>>>> dffa4de98696c54bc62466b71a1609ff19e5a0cb
        onClick={() => setBtnSelect("pedidos en mesa")}
      >
        pedidos en mesa
      </button>
      <button
<<<<<<< HEAD
        className={style.btnOrange}
=======
        className={style.btnBlue}
>>>>>>> dffa4de98696c54bc62466b71a1609ff19e5a0cb
        onClick={() => setBtnSelect("en preparacion")}
      >
        en preparacion
      </button>
      <button
<<<<<<< HEAD
        className={style.btnGreen}
=======
        className={style.btnYellow}
>>>>>>> dffa4de98696c54bc62466b71a1609ff19e5a0cb
        onClick={() => setBtnSelect("despacho")}
      >
        despacho
      </button>
    </div>
  );
};
<<<<<<< HEAD
export default KitchenButtons;
=======
export default KitchenButtons;
>>>>>>> dffa4de98696c54bc62466b71a1609ff19e5a0cb
