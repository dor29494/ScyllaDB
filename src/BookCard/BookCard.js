import React from "react";
import "./BookCard.css";

function BookCard({ bookItem, addToCart }) {
  return (
    <div className="bookCard_item">
      <div className="bookCard_image">
        <img src={bookItem.smallThumbnail} />
      </div>
      <div className="bookCard_text">
        <h3 className="bookCard_title">{bookItem.title}</h3>
        <p className="bookCard_subtitle">{bookItem.subtitle}</p>
        <div className="bookCard_cardBottom">
          <span className="bookCard_subtitle">
            Pages:{" "}
            {bookItem.pageCount
              ? bookItem.pageCount
              : "N/A"}{" "}
          </span>
          <span className="bookCard_subtitle">Price: {`${bookItem.price}$`}</span>
        </div>
        <div className="bookCard_buttonWrapper">
          <button
            className="bookCard_button"
            onClick={() => addToCart(bookItem)}
          >
            add to cart!
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
