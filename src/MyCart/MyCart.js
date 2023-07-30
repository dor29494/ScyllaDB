import { useContext } from "react";
import { ScyllaDB_Context } from "../app/stateManager";
import CartItem from "../CartItem/CartItem";
import "./MyCart.css";

function MyCart() {
  const { cart } = useContext(ScyllaDB_Context);
  return (
    <div className="cartList">
      {cart.length > 0 &&
        cart.map((item, key) => <CartItem item={item} key={key} />)}
    </div>
  );
}

export default MyCart;
