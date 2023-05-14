import React, { useState } from 'react';
import Modal from 'react-modal';
import CategoryList from '../CategoryList/CategoryList';
import "./ModalWindow.css";

const ModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='ModalWindow'>
      <button onClick={openModal}>Catalog</button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <CategoryList />
        <button onClick={closeModal}>Закрыть</button>
      </Modal>
    </div>
  );
}

export default ModalWindow;
