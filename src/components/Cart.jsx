import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";

import { CartContext } from "../contexts/CartContext";

import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);
  const [showModal, setShowModal] = useState(false);
  const [orderId, setOrderId] = useState(null); // Nuevo estado para almacenar el ID de la orden
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
          setOrderId(id); // Almacenar el ID de la orden
          setShowModal(true);
        }
      })
      .finally(() => {
        clear();
        setValues(initialValues);
      });
  };

  const handleClear = () => clear();
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="estilo-modal1">
            ¡Orden Completada! 🎉
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="estilo-modal2">
          ¡Su orden: {orderId} ha sido completada!
        </Modal.Body>
        <Modal.Footer>
          <button className="boton-modal" onClick={() => setShowModal(false)}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
