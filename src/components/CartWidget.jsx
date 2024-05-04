import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import cart from "../assets/cart-white.svg";
import "../App.css";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, elem) => acc + elem.quantity, 0);

  return (
    <Link to="/cart">
      <button className=" btn btn-outline-light cart-widget">
        <img src={cart} alt="Carrito de compras" />
        <span> {total} </span>
      </button>
    </Link>
  );
};
