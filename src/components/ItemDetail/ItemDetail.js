import ravioles from "../Item/ravioles.jpg";

const ItemDetail = (props) => {
    return (
        <div className="ravioles">
            <img src={ravioles}/>
            <p>Id: 1</p>
            <p>Title: ravioles con salsa filetto</p>
            <p>Description: Deliciosas pastas, 
                ideales para acompañar con vino tinto</p>
            <p>Price: 350$</p>  
        </div>
    );
};

export default ItemDetail;