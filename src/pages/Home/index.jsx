import React, { useContext, useEffect } from "react";
import style from "../../styles/privateStyle.module.css";

import OrderList from "../../components/OrderList";
import Header from "../../components/Header";
import MenuOptions from "../../components/MenuOptions";

import MenuContext from "../../context/menu/MenuContext";
import OrdersContext from "../../context/orders/OrdersContext";

const Home = () => {
  const { getMenu, menuSelect, category, selectMenu } = useContext(MenuContext);
  const { saveOrders, addOrder, updatedOrder, deleteOrder, orders, total } =
    useContext(OrdersContext);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getMenu();
  }, []);

  return (
    <>
      <Header />
      <main className={style.main}>
        <section className={style.containerHome}>
          <MenuOptions
            category={category}
            selectMenu={selectMenu}
            menuSelect={menuSelect}
            addOrder={addOrder}
          />
          <OrderList
            orders={orders}
            updatedOrder={updatedOrder}
            deleteOrder={deleteOrder}
            total={total}
            saveOrders={saveOrders}
          />
        </section>
      </main>
    </>
  );
};

export default Home;
