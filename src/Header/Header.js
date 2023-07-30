import React, { useContext } from 'react'
import { ScyllaDB_Context } from '../app/stateManager';

function Header() {
  const {  showCart, setShowCart } = useContext(ScyllaDB_Context);

  return (
    <header className="custom-container">
    <p>ScyllaDB</p>
    <button onClick={()=> setShowCart(!showCart)}>show cart</button>
   </header>
  )
}

export default Header