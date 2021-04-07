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
           // alert('Solo puedes ingresar numeros')
        };
    };

    return (
        <div className="card col-auto mx-auto text-center">
            <h3 className="mt-2">Stock: {stock}</h3>
        <div className="row d-flex mt-5 mb-5 ">         
            <button className="btn btn-success"onClick={ handleApp }>+1</button>
            <form onSubmit={ e => onAdd(e, counter) }>    
                 <input className="input" value= {counter} type = 'number' onChange={handleInputChange}/>  
                 <button className="btn btn-primary mt-8" type='submit'> Agregar </button>      
            </form>    
            <button className="btn btn-danger " onClick={ handleSubtract }>-1</button>
        </div>
           
            {
                cart.length > 0 &&
                <Link to='/cart'>
                    <button className="btn btn-light mb-3">FINALIZAR COMPRA</button>
                </Link>
            }
        </div>
    )
}
/*
    return (
        <div className="card col-auto mx-auto text-center">
            <h3 className="mt-2">Stock: { stock }</h3>
            <div className="d-flex mt-5 mb-3">
                <button onClick={ handleSubstract } className="btn btn-light pl-3 pr-3"> - </button>
                <input value={ counter } type = 'number'className="form-control text-center" onChange={ handleInputChange }/>
                <button onClick={ handleAdd } className="btn btn-light"> + </button>
            </div>
            <button onClick={ e => onAdd( counter ) } className="btn btn-primary pl-10 pr-10 mt-2 mb-5 pl-3 pr-3"> Agregar </button>
            {
                cart.length > 0 &&
                    <Link to='/cart'>
                        <button className="btn btn-success mb-3">FINALIZAR COMPRA</button>
                    </Link>
            }
        </div>
    )
}*/