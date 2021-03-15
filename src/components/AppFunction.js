import { useState } from "react";    

const AppFunction = () => {
    const [stockActual, setStockActual] = useState(5);

    const restarStock = (e,nuevoStock) => {
        e.preventDefault();
        if(restarStock < 0) {
        setStockActual((stockActual) => stockActual - nuevoStock);
    }
    
}
    
    return (
        <div className="App">
            <itemCount stock={stockActual} initial={1} onAdd={restarStock}/>
        </div> 
    );
};

export default AppFunction;

