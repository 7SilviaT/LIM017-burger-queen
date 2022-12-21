import React, { useState } from "react";
import style from "./style.module.css";

const MenuOptions = ({ category, selectMenu, menuSelect, addOrder }) => {
  const [categorySelect, setCategorySelect] = useState("Desayuno");

  const handleClick = (item) => {
    console.log(menuSelect);
    selectMenu(item);
    setCategorySelect(item);
  };

  return (
    <section className={style.containerOptions}>
      <div className={style.containerBtnOpntion}>
        {category.map((item, index) => (
          <button
            className={
              categorySelect === item ? style.btnSelect : style.btnNoSelect
            }
            onClick={() => handleClick(item)}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <div>
        <ul className={style.listMenuOptions}>
          {menuSelect.map((item) => (
            <li
              className={style.itemMenu}
              key={item.menuId}
              onClick={() => addOrder(item)}
            >
              {item.product} <br /> S/. {item.price}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MenuOptions;
