import React, { useContext } from 'react'
import { ScyllaDB_Context } from '../app/stateManager';
import './Header.css';

function Header() {
  const {  showCart, setShowCart, cart } = useContext(ScyllaDB_Context);
  return (
    <header className="custom-container scyllaDB_header">
    <p>ScyllaDB</p>
    <button onClick={()=> setShowCart(!showCart)}>{`My Cart(${cart.length})`}</button>
   </header>
  )
}

export default Header