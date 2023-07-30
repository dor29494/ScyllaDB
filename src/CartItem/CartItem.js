import React, { useContext, useState } from "react";
import { ScyllaDB_Context } from "../app/stateManager";
import "./CartItem.css";

function CartItem({ item }) {
  const { cart, setCart, showCart, setShowCart } = useContext(ScyllaDB_Context);
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const [isNumberInvalid, setNumberInvalid] = useState(false);
  const onQuantityCick = (item) => {
    if (itemQuantity > 0 && itemQuantity <= 100) {
      let cartClone = [...cart];
      let bookIndex = cartClone.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      cartClone[bookIndex].quantity = itemQuantity;
      setCart(cartClone);
    } else {
      setNumberInvalid(true);
    }
  };

  const removeFromCart = (id) => {
    let cartClone = [...cart];
    let cartAfterRemove = cartClone.filter((book) => book.id !== id);
    setCart(cartAfterRemove);
  };

  return (
    <div className="cartItem_item">
      <button
        className="cartItem_button"
        onClick={() => removeFromCart(item.id)}
      >
        X
      </button>
      <h3 className="cartItem_title">{item.bookData.title}</h3>
      <input
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      ></input>
      <button onClick={() => onQuantityCick(item)}>update Quantity</button>
      {isNumberInvalid && (
        <span className="cartItem_error">Sorry! Number invalid</span>
      )}
    </div>
  );
}

export default CartItem;
