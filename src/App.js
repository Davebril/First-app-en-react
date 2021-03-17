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
<<<<<<< HEAD
        <ItemListContainer items={items} />
=======
        <ItemListContainer greeting={{ name: 'querido usuario!' }} />
>>>>>>> 368d57f9e2df2510c2afcac45073f434500c7a17
        <CounterApp/>
        </>
}


export default App;

