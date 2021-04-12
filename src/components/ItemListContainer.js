import { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import {products} from "./products";
import {useParams} from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    const db = getFirestore();

    useEffect(() => {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (id) {
                resolve(products.filter( p => p.tipo === id));
            } else {
              resolve(db.colection("products").data());
            }
          }, 2000);
        }).then(res => { setItems(res) })

      }, [id])
      
    return (
        
        <div className="productos">
        <h1 className="letra">Nuestras Pastas</h1><hr className="linea"></hr>
        <ItemList 
          items={items}
                  />
        </div>
    );
};
export default ItemListContainer;

