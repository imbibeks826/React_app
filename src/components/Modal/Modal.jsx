// Modal.js
import React, { useEffect } from "react";
import { ModalOverlay, ModalContainer, ModalTitle, ModalContent, CloseButton } from "./style"; 

const Modal = ({ isOpen, onClose, title, content, buttonText }) => {
  // Close modal when clicked outside
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      };

      document.addEventListener("click", handleClickOutside);

      // Cleanup event listener when modal is closed
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalTitle>{title}</ModalTitle>
        <ModalContent>{content}</ModalContent>
        <button onClick={onClose}>{buttonText}</button>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;