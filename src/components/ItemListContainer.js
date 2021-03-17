import ItemList from "./ItemList/ItemList";

const ItemListContainer = ({ items }) => {
    return (
        <p>
        <ItemList items={ items }/>
        </p>
    );
};
export default ItemListContainer;