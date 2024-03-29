import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import "../App.css";

import data from "../data/products.json";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      const filter = data.find((p) => p.id === Number(id));
      setProduct(filter);
    });
  }, [id]);

  if (!product)
    return <div className="container loading-estilo">Loading...</div>;

  return (
    <Container className="mt-5 ">
      <div className="container detail-estilo ">
        <div className="container detail-img-estilo">
          <img src={product.pictureUrl} alt="Imagen del Producto" />
        </div>
        <h2 className="detail-title-estilo">{product.title}</h2>
        <p className="detail-category-estilo">{product.category}</p>
        <p className="detail-price-estilo">${product.price}</p>
        <p>{product.description}</p>
      </div>
    </Container>
  );
};
