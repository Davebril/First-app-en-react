import './App.css';
import React from 'react';
import CartProvider from './Cart/CartProvider';
import RouterApp from './routes/RouterApp';
import CartWidget from './components/CartWidget';


const App = () => {
  
  
  return (
        <CartProvider>
             <CartWidget/>
           <RouterApp/>   
        </CartProvider>
      
        
        )
}

export default App


