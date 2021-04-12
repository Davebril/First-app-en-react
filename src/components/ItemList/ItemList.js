import React from 'react';
import Item from '../Item/Item';

function ItemList ({ items }) {
    
      return (
        <div className="card-columns">
        {
        items.length === 0 ? <p>Loading...</p>
        :
        items.map(item => <Item key={item.id} {...item}/>
             )
        }
        </div>

        ) 
      };
      
  export default ItemList;