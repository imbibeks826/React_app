// ModalStyles.js
import styled from "styled-components";

// The background overlay
export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark background with transparency */
  z-index: 1000;
`;

// Modal container for the content
export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: auto;
  position: relative;
  text-align: center;
`;

// Title styling
export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #333;
`;

// Content styling
export const ModalContent = styled.p`
  font-size: 16px;
  color: #666;
  margin: 15px 0;
`;

// Close button styling
export const CloseButton = styled.button`
  background-color: #ff4b5c;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;

  &:hover {
    background-color: #e0434a;
  }
`;
