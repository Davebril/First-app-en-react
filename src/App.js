import './App.css';
import React from 'react';
import CartProvider from './Cart/CartProvider';
import RouterApp from './routes/RouterApp';

const App = () => {
  
  
  return (
        <CartProvider>
           <RouterApp/>   
        </CartProvider>
        )
}

export default App


