import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {useContext} from 'react';
import CartContext from '../Cart/CartContext';

function CartWidget() {

    const {cart}= useContext(CartContext)
    let cantidad = 0

    for (let i = 0; i < cart.length; i++) {
        cantidad = cantidad + cart[i].quantity
    }

    return  (
        
        cantidad!==0  &&
        <div className= "Cart"><div className="redalert">1</div>
            <button><FontAwesomeIcon icon={faShoppingCart}/></button>
            <p className="colortxt">Sus selecciones de comida = {cantidad}</p>
        </div> 
            );
        }
    

export default CartWidget;

