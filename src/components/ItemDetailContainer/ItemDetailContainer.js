import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase';

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({});
  const {id} = useParams();
  const [ loading, setLoading ] = useState(true)
  

  useEffect(() => {

    const db = getFirestore();
    const collections =  db.collection("products");

      collections.get()
      .then( res => {
        let arr = [];
        res.docs.map(c => arr.push({ id: parseInt(c.id), ...c.data() }));
        const [prod] = arr.filter( p => p.id === parseInt(id) );
        setDetail(prod);  
        setLoading(false);    
        console.log(detail)  
      })
      .catch (console.log('Algo salio mal'))
  },[id]);
    
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