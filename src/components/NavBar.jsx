import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CartWidget } from "./CartWidget";
import logo from "../assets/zoku-logo.png";
import "../App.css";

export const NavBar = () => {
  return (
    <Navbar className="navbar-container">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo-zoku" src={logo} alt="Logo Zoku" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="estilo-lista" href="#">
            Mangas
          </Nav.Link>
          <Nav.Link className="estilo-lista" href="#">
            Figuras
          </Nav.Link>
          <Nav.Link className="estilo-lista" href="#">
            Coleccionables
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
