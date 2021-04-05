import React from "react";
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <div className="App">
      <ul>
        <li className="ph"><Link to='/'>PH de pastas</Link></li>
        <li><Link to='/category/Ravioles'>Ravioles</Link></li>
        <li><Link to='/category/Canelones'>Canelones</Link></li>
        <li><Link to='/category/Sorrentinos'>Sorrentinos</Link></li>
        
        
      </ul>
      <CartWidget/>
    </div>
    
  );
};


export default NavBar;
