import { useEffect, useState } from 'react';

const useSyncCartWithLocalStorage = (initialCart) => {
  const getInitialCart = () => {
    const storedCart = localStorage.getItem(process.env.REACT_APP_USER_CART);
    return storedCart ? JSON.parse(storedCart) : initialCart;
  };

  const [cart, setCart] = useState(getInitialCart);

  useEffect(() => {
    // Whenever the cart changes, update the local storage
    localStorage.setItem(process.env.REACT_APP_USER_CART, JSON.stringify(cart));
  }, [cart]);

  return [cart, setCart];
};

export default useSyncCartWithLocalStorage;