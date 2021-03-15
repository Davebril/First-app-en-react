import './App.css';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import CounterApp from './components/CounterApp';

function App() {
  return <>
         <NavBar/>
        <CartWidget/>
        <ItemListContainer greeting={{ name: 'querido usuario!' }} />
        <CounterApp/>
        </>
}


export default App;

