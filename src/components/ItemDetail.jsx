import Container from "react-bootstrap/Container";

import { useContext } from "react";
import { ItemCount } from "./itemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => {
    addItem(product, quantity);
  };

  return (
    <Container className="mt-5 ">
      <div className="container detail-estilo ">
        <div className="container detail-img-estilo">
          <img src={product.imageId} alt="Imagen del Producto" />
        </div>
        <h2 className="detail-title-estilo">{product.title}</h2>
        <p className="detail-category-estilo">{product.categoryId}</p>
        <p className="detail-price-estilo">${product.price}</p>
        <p>{product.description}</p>
        <p className="stock-estilo">
          Stock Disponible: {product.stock} unidades
        </p>
        <ItemCount stock={product.stock} onAdd={add} />
      </div>
    </Container>
  );
};
