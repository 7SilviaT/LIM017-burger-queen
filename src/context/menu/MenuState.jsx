import React, { useReducer } from "react";
import MenuContext from "./MenuContext";
import reducer from "./MenuReducer";

import { db } from "../../firebase";

const MenuState = ({ children }) => {
  const initialState = {
    menu: [],
    menuSelect: [],
    category: ["Desayuno", "Almuerzo / Cena"],
  };

  const getMenu = async () => {
    try {
      const info = await db.collection("menu").get();
      const menu = [];

      info.forEach((item) => {
        menu.push({
          menuId: item.id,
          ...item.data(),
        });
        console.log(menu);
      });

      const menuSelect = menu.filter((item) => item.category === "Desayuno");
      dispatch({
        type: "SET_MENU",
        payload: {
          menu: menu,
          menuSelect: menuSelect,
        },
      });
    } catch (error) {
      console.log(error)
    }
  };

  const selectMenu = (itemFilter) => {
    dispatch({
      type: "CHANGE_MENU_SELECT",
      payload: itemFilter,
    });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MenuContext.Provider
      value={{
        getMenu,
        selectMenu,
        menu: state.menu,
        menuSelect: state.menuSelect,
        category: state.category,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuState;
