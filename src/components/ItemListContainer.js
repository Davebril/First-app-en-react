import { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";
import {products} from "./products";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    

    useEffect(() => {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (id) {
                resolve(products.filter( p => p.Tipo === id));
            } else {
              resolve(products);
            }
          }, 2000);
        }).then((resultado) => setItems(resultado));
      }, [id]);

    return (
        <div>
        <h1>Nuestras Pastas</h1>
        <ItemList items={items}/>
        </div>
    );
};
export default ItemListContainer;