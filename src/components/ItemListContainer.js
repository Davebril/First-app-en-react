import { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        new Promise((todoBien, todoMal) => {
          setTimeout(() => {
            todoBien (["Manzana"]);
          }, 2000);
        }).then((resultado) => setItems(resultado));
      }, []);

    return (
        <div>
        <h1>Contenedor</h1>
        <ItemList items={items}/>
        </div>
    );
};
export default ItemListContainer;