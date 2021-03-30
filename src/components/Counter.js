import React, {useState} from 'react';

    const Counter = ({init, stock, onAdd}) => {

    const [ counter, setCounter] = useState( init );

    const handleApp = () => {
        if (counter < stock) {
        setCounter( counter + 1);
        }
    }

    const handleSubtract = () => {
        if (counter > 1) {
        setCounter( counter - 1);
        }
    }

    return (
        <div className="d-flex">         
            <button className="btn btn-success mt-5"onClick={ handleApp }>+1</button>
            <form onSubmit={ e => onAdd(e, counter) }>    
                 <input className="input" value= {counter}/>  
                 <button className="btn btn-primary mt-8" type='submit'> Add </button>      
            </form>    
            <button className="btn btn-danger mt-5" onClick={ handleSubtract }>-1</button>
        </div>

    )
}

export default Counter;