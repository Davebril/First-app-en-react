import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ defaultValue = [], children }) => {
    
    const [cart, setCart] = useState(defaultValue);

    
    const addItem = (item, quantity) => {
        
        setCart([
            ...cart,
            { item, quantity }
        ]);
    };

    const removeItem = (itemId) => {
        setCart(cart.filter(c => c.item.id !== itemId));
        
        console.log(`Se ha quitado el producto con id ${itemId}`);
    };

    const clear = () => {
        setCart([]);
        console.log('Se limpio el carrito. Ahora no hay productos.');
    }

    const isInCart = (id) => {
        if (setCart(cart.find(c => c.id === id))) {
            return true
        }
        else {
            return false
        }
    }
    console.log('Estamos buscando el producto')

        return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }} >
            { children}
        </CartContext.Provider>
    );
};

export default CartProvider;