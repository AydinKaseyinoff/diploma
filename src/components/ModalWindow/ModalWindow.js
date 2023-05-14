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
      <Modal className="ModalWrapper" isOpen={isModalOpen} onRequestClose={closeModal}>
        <CategoryList />
        <button onClick={closeModal}>
          <img src="https://static.vecteezy.com/system/resources/previews/000/440/375/original/vector-cancel-icon.jpg" alt="close-button" />
        </button>
      </Modal>
    </div>
  );
}

export default ModalWindow;
