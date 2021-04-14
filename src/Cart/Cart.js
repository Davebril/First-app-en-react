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
                <h4 className="mt-2 bg-white">No hay productos en el carrito<Link to="/"><button>Volver</button>
                </Link></h4>
                :
        
                <div>
                    <div id="compra" className="card "><h3>MI CARRITO</h3>
                        {cart.map(x => (<p>{x.item.tipo}:
                            {x.item.descripcion}, ${x.item.precio}<button className="eliminar"
                                onClick={() => removeItem(x.item.id)}>x</button></p>))
                        }
                        <button onClick={() => clear()}>Eliminar todo</button>

                    </div>
                    <div className="total">
                        TOTAL = {total}
                    </div>
                    <div>
                        <button id="finalizar" className="btn btn-success">FINALIZAR COMPRA</button>
                    </div>
                    <div>
                        <Link to="/checkout"><button id="pagar" className="btn btn-success">IR A PAGAR</button></Link>
                    </div>
                </div>
        }
        </>
    );
    };

export default Cart;

