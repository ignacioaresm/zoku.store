import { Item } from "./Item";
import "../App.css";

export const ItemList = ({ products }) => {
  return (
    <div className="container list-estilo">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};
