import Item from '../Item/Item';

const ItemList = ({ items }) => (
    <>
      
      <div className="card-columns">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </>
  );
  export default ItemList;