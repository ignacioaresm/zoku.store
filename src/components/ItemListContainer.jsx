import Container from "react-bootstrap/Container";

import "../App.css";

export const ItemListContainer = ({ greeting }) => (
  <Container className="estilo-greeting mt-4">
    <h1>{greeting}</h1>
    <br />
    <p>Estamos preparando la tienda online, nos vemos pronto 😉 </p>
  </Container>
);
