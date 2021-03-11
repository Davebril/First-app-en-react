import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return  (
        <div className= "Cart">
            <button><FontAwesomeIcon icon={faShoppingCart}/></button>
            
        </div>
    );
}

export default CartWidget;