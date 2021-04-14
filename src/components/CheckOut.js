import React, {useState, useContext} from 'react';
import {getFirestore} from "../firebase/firebase";
import CartContext from "../Cart/CartContext";
import firebase from 'firebase/app';
import Swal from 'sweetalert2';

const CheckOut = () => {

    const order = getFirestore().collection("orders");
    const { cart } = useContext( CartContext );
    let total = 0

    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].item.precio * cart[i].quantity
    }
    
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: '',
        }       
    );

    const handleInputChange = ({target}) => {
        setBuyer({
            ...buyer,
            [target.name]: target.value
        });
    }

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        order.add({buyer, cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total:total}).then( myOrder => {
                    Swal.fire({
                    icon: 'success',
                    title: `Número de orden: ${myOrder.id}`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                }).catch( err => {
                    Swal.fire({
                    icon: 'error',
                    title: `${ err }`,
                    showConfirmButton: false,
                    timer: 1500
                 })
             })
            }

return (

        <form className="form" onSubmit={handleSubmitOrder}>
           <input className="input-group input-grup-sm" name="name" value ={buyer.name}onChange={handleInputChange} onSubmit={handleSubmitOrder}/>
           <input className="input-group input-grup-sm" name="phone" value ={buyer.phone}onChange={handleInputChange} onSubmit={handleSubmitOrder}/>
           <input className="input-group input-grup-sm" name="email" value ={buyer.email}onChange={handleInputChange} onSubmit={handleSubmitOrder}/>
            <button type="submit" className="btn btn-info">Generar orden</button>          
        </form>
       )
}   

export default CheckOut;
