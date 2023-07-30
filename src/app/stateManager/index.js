import React, { createContext, useState } from "react";

const ScyllaDB_Context = createContext();
const { Provider } = ScyllaDB_Context;
const StateManager = ({ children }) => {
  const [data, setData] = useState([]);
  const [initialBooks, setInitialBooks] = useState([]);
  const [booksToShow, setBooksToShow] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCartUpdaingError, setShowCartUpdaingError] = useState(false);
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_API_KEY);

  const state = {
    data,
    apiKey,
    cart,
    showCart,
    showCartUpdaingError,
    booksToShow,
    initialBooks
  };

  const action = {
    setData,
    setCart,
    setShowCart,
    setShowCartUpdaingError,
    setBooksToShow,
    setInitialBooks
  };
  return <Provider value={{ ...state, ...action }}>{children}</Provider>;
};

export { ScyllaDB_Context, StateManager };
