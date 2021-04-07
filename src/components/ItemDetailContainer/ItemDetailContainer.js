import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import {products} from '../products';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({});
  const {id} = useParams();
  const [ loading, setLoading ] = useState(true)
  

  useEffect(() => {

      new Promise((resolve, reject) => {
        setTimeout(() => {
         
              resolve(products);            
        }, 2000);

      }).then(res => { 
        setDetail(res.filter( p => p.id === parseInt(id) )[0]) ;
        setLoading(false);
    })

    }, [id]);
    return (
      <>
          {
              loading ?
                  <p>Loading...</p>
              :
                  <ItemDetail 
                      detail2 = {detail} 
                  />
          }
      </>
  )
}

export default ItemDetailContainer;

