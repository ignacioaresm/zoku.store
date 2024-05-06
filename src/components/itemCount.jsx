import "../App.css";
import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncrease = () => {
    if (stock > quantity) setQuantity((prev) => prev + 1);
  };

  const handleAdd = () => {
    onAdd(quantity);
    setQuantity(1);
  };

  return (
    <div className="estilo-contadores">
      <div className="d-flex estilo-mas-menos">
        <button className="botones-mas-menos" onClick={handleDecrease}>
          -
        </button>
        <input
          className="estilo-contador-imput"
          type="number only-read"
          value={quantity}
        />
        <button className="botones-mas-menos" onClick={handleIncrease}>
          +
        </button>
      </div>
      <button className="estilo-agregar" type="button" onClick={handleAdd}>
        Agregar al Carrito
      </button>
    </div>
  );
};
