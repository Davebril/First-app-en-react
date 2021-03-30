import {Link} from "react-router-dom";
import React from "react"

const Item = ({Tipo, Descripcion, Precio, urlImg}) => {
    return (
        <Link to = {`/item/${ Tipo }`} >
         <div className="card" style={{width: '18rem'}}>
             <img src={ urlImg } className="card-img-top" alt={`${Tipo} ${Descripcion}`}/>
            <div className="card-body">
                <h4>{`${Tipo} ${Descripcion}`}</h4> 
                <p className="card-text">{`$ ${Precio}`}</p>
            </div>
        </div>
        </Link>
        
    );
}; 

export default Item;
