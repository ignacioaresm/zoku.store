import cart from "../assets/cart-white.svg";
import "../App.css";

export const CartWidget = () => {
  return (
    <button className=" btn btn-outline-light cart-widget">
      <img src={cart} alt="Cart" />
      <span> 7 </span>
    </button>
  );
};
