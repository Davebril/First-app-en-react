import { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import {useParams} from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {

      const db = getFirestore();
      const collections =  db.collection("products");

      collections.get()
        .then( res => {
            let arr = []
            res.docs.map(c => arr.push({ id: parseInt(c.id), ...c.data() }));
            if (id) {
              setItems(arr.filter( p => p.tipo === id));
            } else {
              setItems(arr);        
            }
        })
        .catch( console.log('Algo fue mal'))
  }, [id]);
      
    return (
        
        <div className="productos jumbotron-fluid">
        <h1 className="letra display-4">Nuestras Pastas</h1><hr className="linea"></hr>
        <ItemList 
          items={items}
                  />
        </div>
    );
};
export default ItemListContainer;

