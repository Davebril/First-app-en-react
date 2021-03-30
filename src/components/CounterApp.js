import Swal from 'sweetalert2';
import Counter from './Counter';


    const CounterApp = () => {
        const onAdd = (e, q) => {
           e.preventDefault;
               Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Gracias por su compra!',
               showConfirmButton: false,
               timer: 1500
             })
        }
       return (
           <>
               <h1>Elija cantidad</h1>
               <Counter init={1} stock={10} onAdd={onAdd}/>
           </>
      );
       }
export default CounterApp;