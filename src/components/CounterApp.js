import Counter from './Counter';
const CounterApp = () => {
     const onAdd = (e, q) => {
        alert(`Has agregado ${q} elementos al carrito.`)
     }
    return (
        <>
            <h1> Counter</h1>
            <Counter init={1} stock={10} onAdd={onAdd}/>
        </>
   );
    }
export default CounterApp;