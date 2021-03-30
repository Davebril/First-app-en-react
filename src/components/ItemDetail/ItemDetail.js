import ravioles from "../Item/ravioles.jpg";
import canelones from "../Item/canelones.jpg";
import sorrentinos from "../Item/sorrentinos.jpg";

const ItemDetail = (props) => {
    return (
        <div className="pastas">
            <img className="ravioles" src={ravioles}/>
            <p>Id: { props.item.id }</p>
            <p>Tipo: { props.item.Tipo }</p>
            <p>Descripcion: { props.item.Descripcion }</p>
            <p>Precio: { props.item.Precio }</p>                   
        </div>

        
    );
};

export default ItemDetail;