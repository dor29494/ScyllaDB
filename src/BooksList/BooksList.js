import React, { useContext, useEffect, useState } from "react";
import { ScyllaDB_Context } from "../app/stateManager";
import BookCard from "../BookCard/BookCard";

function BooksList({setStorageCart}) {
  const { data, booksToShow, cart, setCart, setBooksToShow,setInitialBooks } =
    useContext(ScyllaDB_Context);

  useEffect(() => {
    if (data.length > 0) {
      let newDataWithPrices = [];
      for (let i = 0; i < data.length; i++) {
        let randomPrice = Math.floor(Math.random() * 91) + 10;
        let book = data[i];
        let bookObj = {
          id: book.id,
          price: randomPrice,
          title: book.volumeInfo.title,
          subtitle: book.volumeInfo.subtitle,
          smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail,
          pageCount: book.volumeInfo.pageCount
        };
        newDataWithPrices.push(bookObj);
      }
      setBooksToShow(newDataWithPrices);
      setInitialBooks(newDataWithPrices);
    }
  }, []);

  const addToCart = (book) => {
    // let quantity = prompt("Please select the desired quantity");
    const isAlreadyInCart =
      cart.findIndex((item) => item.id === book.id) !== -1;
      if (!isAlreadyInCart) {
        setCart((prev) => [
          ...prev,
          {
            bookData: {
              title: book.title
                ? book.title
                : book.subtitle,
            },
            id: book.id,
            quantity: 1,
          },
        ]);
      } else {
        alert("The product is already in your cart.");
      }
  };

  return (
    <div className="bookList_wrapper">
      {booksToShow.length > 0 ? (
        booksToShow.map((book, key) => (
          <BookCard bookItem={book} addToCart={addToCart} key={key} />
        ))
      ) : (
        <span>No results found for the search</span>
      )}
    </div>
  );
}

export default BooksList;
