import Rutas from "./routes";
import AuthState from "./context/auth/AuthState";
import MenuState from "./context/menu/MenuState";
import OrdersState from "./context/orders/OrdersState";

function App() {
  return (
    <AuthState>
      <MenuState>
        <OrdersState>
          <Rutas />
        </OrdersState>
      </MenuState>
    </AuthState>
  );
}

export default App;
