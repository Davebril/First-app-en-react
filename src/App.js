import './App.css';
import React, { useState} from 'react';
import CartContext from './Cart/CartContext';
//import CartProvider from './cart/CartProvider';
import RouterApp from './routes/RouterApp';

const App = () => {
  
    const [cart, setCart] = useState([]);
  
  return (
        <CartContext.Provider value={{cart, setCart}}>
           <RouterApp/>   
        </CartContext.Provider>
        )
}

export default App

