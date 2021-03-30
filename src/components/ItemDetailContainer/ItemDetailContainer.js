import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {products} from './products';

const {ItemDetailContainer} = (props) => {
  const [item, setItem] = useState({});
  const {id} = useParams();
  const [ loading, setLoading ] = useState(true)
  

  useEffect(() => {
      new Promise((resolve, reject) => {
        setTimeout(() => {
         
              resolve(products.find( p => p.Tipo === id));
              setLoading(false)
                 
        }, 2000);
      }).then((resultado) => setItem(resultado));
    }, [id]);

    return (
      <>
          {
              loading ?
                  <p>Loading...</p>
              :
                  <ItemDetail item = { item } />
          }
      </>
  )
};

export default ItemDetailContainer;