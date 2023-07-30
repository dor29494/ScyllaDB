import React, { useEffect, useState, useContext } from "react";
import { ScyllaDB_Context } from "../app/stateManager";
import BooksList from "../BooksList/BooksList";
import MyCart from "../MyCart/MyCart";
import Search from "../Search/Search";
import useSyncCartWithLocalStorage from "../assests/UseLocalStorage/useSyncCartWithLocalStorage";

function Main() {
  const { data, setData, apiKey, showCart, setBooksToShow, setCart, cart} =
    useContext(ScyllaDB_Context);
    const [storageCart, setStorageCart] = useSyncCartWithLocalStorage([]); 
    useEffect(() => {
    async function fetchBooksList() {
      const response = await fetch(`http://localhost:5000/api/books`);
      const booksData = await response.json();
      let displayBooksArr = [];
      setData(booksData.result);
      setBooksToShow(booksData.result);
      setCart(storageCart.length > 0 ? storageCart : []);
    }
    fetchBooksList();
  }, []);

  useEffect(()=>{
    setStorageCart(cart);
  },[cart])

  return (
    <div className="custom-container">
      {data.length > 0 && (
        <>
          {showCart && <MyCart />}
          <Search />
          <BooksList setStorageCart={setStorageCart}/>
        </>
      )}
    </div>
  );
}

export default Main;
