import { useContext } from "react";
import { ScyllaDB_Context } from "../app/stateManager";
import CartItem from "../CartItem/CartItem";
import "./MyCart.css";

function MyCart() {
  const { cart } = useContext(ScyllaDB_Context);
  const totalSum = cart.reduce((acc, book) => acc + book.price, 0);
  return (
    <div className="cartList">
      {cart.length > 0 &&
        cart.map((item, key) => <CartItem item={item} key={key} />)}
        {totalSum > 0 &&
        <h4>{`Total Price: ${totalSum}$`}</h4>
        }
    </div>
  );
}

export default MyCart;
