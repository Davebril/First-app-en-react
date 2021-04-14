import {Link} from "react-router-dom";
import React from "react"
import CounterApp from '../CounterApp';

 const Item = ({id, tipo, descripcion, precio, urlImg, stock}) => {
    return (
        
         <div className="card" style={{width: '18rem'}}>
             <img src={ urlImg } className="card-img-top" alt={`${tipo} ${descripcion}`}/>
            <div className="card-body">
                <h4>{`${tipo} ${descripcion}`}</h4> 
                <p className="card-text">{`$ ${precio}`}</p>
                <Link to = {`/item/${ id }`} >Detalles</Link>
                <CounterApp 
                    id ={id}
                    tipo = {tipo}
                    descripcion = {descripcion}
                    stock = {stock}
                    precio = {precio}
                    
                    />
            </div>
        </div>
        
        
    );
}; 

export default Item;



