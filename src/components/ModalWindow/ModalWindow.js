import React, { useState } from 'react';
import Modal from 'react-modal';
import CategoryList from '../CategoryList/CategoryList';
import "./ModalWindow.css";

const ModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCategoryClick = () => {
    closeModal();
    // Дополнительная логика, которую нужно выполнить при переходе по категории
  };

  return (
    <div className='ModalWindow'>
      <button onClick={openModal}>Categories</button>
      <Modal className="ModalWrapper" isOpen={isModalOpen} onRequestClose={closeModal}>
        <CategoryList onCategoryClick={handleCategoryClick} />
        <button onClick={closeModal}>
          <img src="https://static.vecteezy.com/system/resources/previews/000/440/375/original/vector-cancel-icon.jpg" preload alt="close-button" />
        </button>
      </Modal>
    </div>
  );
}

export default ModalWindow;
