const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ORDERS":
        let order;
        order = {
          menuId: action.payload.menuId,
          product: action.payload.product,
          price: action.payload.price,
          quantity: 1,
        };
        if (state.orders.length === 0) {
          return {
            ...state,
            orders: [...state.orders, order],
          };
        } else {
          let findOrder = state.orders.find(
            (item) => item.menuId === action.payload.menuId
          );
          if (findOrder) {
            let order = {
              ...findOrder,
              quantity: findOrder.quantity + 1,
            };
            /**
             * order = {
             *    menuId: 1234
             *    price: 4
             *    nombre: 'cafeconleche'
             *    cantidad: 2
             * }
             *
             * orders = [
             * {menuId: 333},
             * {menuId: 1234, price 4, nombre: 'cafeconleche', cantidad: 1},
             * {menuId: 444}
             * ]
             */
            return {
              orders: state.orders.map((item) => {
                if (item.menuId === findOrder.menuId) {
                  return order;
                } else {
                  return { ...item };
                }
              }),
            };
          } else {
            return {
              ...state,
              orders: [...state.orders, order],
            };
          }
        }
  
      case "UPDATED_ORDERS":
        /**
         * payload = {
         *    menuId: 1234
         *    operation: -1
         * }
         *
         * orders = [
         * {menuId: 333},
         * {menuId: 1234, price 4, nombre: 'cafeconleche', cantidad: 1, quatity: 1},
         * {menuId: 444}
         * ]
         */
  
        let orderUpdated = state.orders.map((item) => {
          if (item.menuId === action.payload.id) {
            let operation = item.quantity + action.payload.operation;
            return {
              ...item,
              quantity: operation === 0 ? 1 : operation,
            };
          } else {
            return { ...item };
          }
        });
  
        return {
          ...state,
          orders: orderUpdated,
        };
  
      case "GET_TOTAL_AMOUNT":
        let suma = 0;
  
        state.orders.forEach((item) => {
          suma = suma + item.price * item.quantity;
        });
  
        return { ...state, total: suma };
  
      case "DELETE_ORDER":
        /**
         * payload = 1234
         *
         * orders = [
         * {menuId: 333},
         * {menuId: 1234, price 4, nombre: 'cafeconleche', cantidad: 1, quatity: 1},
         * {menuId: 444}
         * ]
         *
         * updateOrders = [{menuId: 333}, {menuId: 444}]
         */
  
        const updateOrders = state.orders.filter(
          (item) => item.menuId !== action.payload
        );
  
        return {
          ...state,
          orders: updateOrders,
        };
  
      case "CLEAR_ORDERS":
        return {
          orders: [],
          total: 0,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  