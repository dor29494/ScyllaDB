import React, { useContext } from "react";
import { ScyllaDB_Context } from "../app/stateManager";

function Search() {
  const { booksToShow, setBooksToShow, initialBooks} = useContext(ScyllaDB_Context);
  const booksFilter = (e) => {
    if(e.target.value.length === 0 || e.target.value === ""){
        setBooksToShow(initialBooks);
        return;
    }
    let bookstoShowClone = [...booksToShow];
    let query = e.target.value;
    let newBooksList = bookstoShowClone.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    setBooksToShow(newBooksList);
  };
  return (
    <div className="searchbar">
      <input onChange={(e) => booksFilter(e)} placeholder="Filter books..." />
    </div>
  );
}

export default Search;
