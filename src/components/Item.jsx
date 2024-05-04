import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";
import "../App.css";

export const Item = ({ product }) => (
  <Card className="cards-estilo" style={{ width: "20rem" }}>
    <Card.Img variant="top" src={product.imageId} />
    <Card.Body>
      <Card.Title className="titulo-estilo">{product.title}</Card.Title>
      <Card.Text className="categoria-estilo">{product.categoryId}</Card.Text>
      <Card.Text className="precio-estilo">${product.price}</Card.Text>
      {/* <Card.Text className="descripcion-estilo">
        {product.description}
      </Card.Text> */}
      <Link to={`/item/${product.id}`}>
        <Button className="boton-estilo container" variant="outline-dark">
          Ver Detalle
        </Button>
      </Link>
    </Card.Body>
  </Card>
);
