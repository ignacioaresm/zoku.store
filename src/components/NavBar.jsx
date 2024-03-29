import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";
import logo from "../assets/zoku-logo.png";
import "../App.css";

export const NavBar = () => {
  return (
    <Navbar className="navbar-container" data-bs-theme="dark">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>
          <img className="logo-zoku" src={logo} alt="Logo Zoku" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="estilo-lista" to="/category/Mangas" as={NavLink}>
            Mangas
          </Nav.Link>

          <Nav.Link
            className="estilo-lista"
            to="/category/Figuras"
            as={NavLink}
          >
            Figuras
          </Nav.Link>

          <Nav.Link
            className="estilo-lista"
            to="/category/Coleccionables"
            as={NavLink}
          >
            Coleccionables
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
