import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../Cart/CartContext';

   export const Counter = ({init, stock, onAdd}) => {

    const { cart } = useContext( CartContext );
    const [ counter, setCounter] = useState( init );

    const handleApp = () => {
        if (counter < stock) {
        setCounter( counter + 1);
        }
    }

    const handleSubtract = () => {
        if (counter > 1) {
        setCounter( counter - 1);
        };
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        if (typeof e.target.value === 'number') {
            setCounter (e.target.value);
        } else {
           
        };
    };

    return (
        <div className="card col-auto mx-auto ">
            <h4 className="mt-2 ml-5">Cantidad: {stock}</h4>
        <div className="row d-flex mt-5 mb-5 ">         
            <button className="btn btn-success"onClick={ handleApp }>+1</button>
            <form onSubmit={ e => onAdd(e, counter) }>    
                 <input className="input" value= {counter} onChange={handleInputChange}/>  
                 <button className="btn btn-primary mt-8" type='submit'> Agregar </button>      
            </form>    
            <button className="btn btn-danger " onClick={ handleSubtract }>-1</button>
        </div>
           
            {
                cart.length > 0 &&
                <Link to='/cart'>
                    <button className="btn btn-warning ml-4 mb-1">FINALIZAR COMPRA</button>
                </Link>
            }
        </div>
    )
}
