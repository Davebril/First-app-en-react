import Item from '../Item/Item';

const ItemList = ({ items }) => (
    <>
      <h1>Lista</h1>
      <ul className="Contain">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </>
  );
  export default ItemList;