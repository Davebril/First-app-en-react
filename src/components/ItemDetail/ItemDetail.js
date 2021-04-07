import React from 'react'
import CounterApp from '../CounterApp'

const ItemDetail = ({ detail2: detail}) => {
  
    return (
        
        <div className="pastas">
            <div className="col-6 pt-5 pr-5 pb-6 pl-5">
            <img src={detail.urlImg}  alt={`${detail.id} ${detail.tipo}`} className="w-100"/>
            </div>
            <div className="col-6 pt-5 pr-5 pb-6 pl-5">
                <h3>{`${detail.id} ${detail.tipo}`}</h3>
                <h5>{`${detail.descripcion}`}</h5>
                <p>{`$ ${detail.precio}`}</p>
                <CounterApp
                    id={ detail.id }
                    tipo={ detail.tipo }
                    precio={ detail.precio }
                    stock={ detail.stock } 
                />
                
            </div>

            
        </div>
                
    )
}


export default ItemDetail;

