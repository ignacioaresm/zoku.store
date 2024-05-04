import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";

import { CartContext } from "../contexts/CartContext";

import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);
  const { clear, items, removeItem } = useContext(CartContext);

  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleChange = (ev) => {
    setValues((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  const handleSubmit = () => {
    const order = {
      buyer: values,
      items,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("¡Su orden: " + id + "ha sido completada! ✌🏻");
        }
      })
      .finally(() => {
        clear();
        setValues(initialValues);
      });
  };

  const handleClear = (id) => clear();
  const handleRemove = (id) => removeItem(id);

  return (
    <Container className="container-carrito">
      <div className="estilo-titulo-carrito">
        <h2>Productos</h2>
        <button className="estilo-vaciar" onClick={handleClear}>
          Vaciar Carrito
        </button>
      </div>

      <hr />
      {items.map((i) => {
        return (
          <div key={i.name}>
            <p className="estilo-lista-carrito">Producto: {i.title}</p>
            <p className="estilo-lista-carrito">Cantidad: {i.quantity}</p>
            <p className="estilo-lista-carrito">Precio: ${i.price}</p>
            <button
              className="estilo-quitar"
              type="button"
              onClick={() => handleRemove(i.id)}
            >
              x
            </button>
            <hr />
          </div>
        );
      })}

      <div className="estilo-total">💸 Total a Pagar ${total()}</div>

      {items?.length > 0 && (
        <form className="estilo-formulario">
          <label>Nombre</label>
          <input
            className="estilo-imput"
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <label>Teléfono</label>
          <input
            className="estilo-imput"
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            className="estilo-imput"
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
          <br />
          <button
            className="estilo-comprar"
            type="button"
            onClick={handleSubmit}
          >
            Realizar Compra
          </button>
        </form>
      )}
    </Container>
  );
};
