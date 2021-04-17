import Swal from 'sweetalert2';
import {Counter} from './Counter';
import React, { useContext, useState } from 'react';
import CartContext from '../Cart/CartContext';



    const CounterApp = ({stock: stck,id,tipo,descripcion,precio,cart,setCart}) => {

         const { addItem } = useContext( CartContext );

         const [stock, setStock] = useState (stck);
         const pastas = {id,tipo,descripcion,precio}
            console.log(addItem)
         const onAdd = (e, q) => {
             e.preventDefault()
             if( q <= stock) {

                addItem( pastas, q )
                 
                 setStock (stock - q);
             } else {
                 alert('No hay suficiente stock');
             };
           
               Swal.fire({
               icon: 'success',
               title: 'Su orden se agrego al carrito!',
               showConfirmButton: false,
               timer: 1500
             })
        };
       return (         
               <div className="letra2">
               <Counter init={1} 
                        stock={stock} 
                        onAdd={onAdd}
                />
                
                </div>
      );
   }

   export default CounterApp;






