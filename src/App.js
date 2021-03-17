import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import CounterApp from './components/CounterApp';
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
      setTimeout(() => {
        todoBien ([{fruta:'Manzana, '}, {fruta: ' Pera, '}, {fruta:' Naranja'}]);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

  return <>
         <NavBar/>
        <CartWidget/>
        <ItemListContainer items={items} />
        <CounterApp/>
        </>
}


export default App;

