import React from 'react';
import CartContext from './CartContext';
import { useContext } from 'react';
import {Link} from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext)
    let total = 0

    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].item.precio * cart[i].quantity
    }

    return (

        <>
        {
            cart.length === 0 ?
                <h4 className="mt-2">No hay productos en el carrito<Link to="/">
                    <button className="btn btn-warning ml-2">Volver</button>
                </Link></h4>
                :       
                <div>
                    <div id="compra"><h3>MI CARRITO</h3>
                     {cart.map(x => (<p>Cantidad: {x.quantity} | {x.item.tipo} :
                            {x.item.descripcion}| ${x.item.precio}<button className="btn btn-danger"id="eliminar"
                                onClick={() => removeItem(x.item.id)}>x</button></p>))
                        }
                    </div>
                    
                    <button id="eliminarTodo"className="btn btn-danger"onClick={() => clear()}>Eliminar todo</button>

                    <div className="total">
                        TOTAL = {total}
                    </div> 

                    <div>
                        <Link to="/checkout"><button id="finalizar" className="btn btn-success">IR A PAGAR</button></Link>
                    </div>
                </div>
        }
        </>
    );
    };

export default Cart;

