import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = (props) => {
const [ item, setItem ] = useState({}) ;

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      setTimeout(() => {
        todoBien ({id: 1, title:"Pera", description:"", price: 10, imgURL: ""});
      }, 2000);
    }).then((resultado) => setItem(resultado));
  }, []);

  return <ItemDetail/>;
};

export default ItemDetailContainer;