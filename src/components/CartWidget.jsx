import cart from "../assets/cart-white.svg";

export const CartWidget = () => {
  return (
    <button className=" btn btn-outline-light cart-widget">
      <img src={cart} alt="Cart" />
      <spam> 7 </spam>
    </button>
  );
};
