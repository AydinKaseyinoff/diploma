import React, { useState, useEffect, useContext } from "react";
import "./Modal.css"; // Подключите свой файл CSS для стилизации модального окна
import Cart from "../../pages/Cart";
import { AppContext } from "../../App";

const Modaler = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  return (
    <div className="ModalBtn">
      <button onClick={openModal}>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-cart.svg"
            alt="CART"
          />
        <div className="total-cart">{total > 0 ? total : null}</div>
      </button>
      <div className={`modal ${isOpen ? "open" : ""}`}>
        <div className="modal-overlay" onClick={closeModal}></div>
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Modaler;
