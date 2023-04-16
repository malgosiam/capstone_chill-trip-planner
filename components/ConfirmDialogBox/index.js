import { useState } from "react";
import styled from "styled-components";
import StyledButton from "../StyledButton";
import StyledButtonsContainer from "../StyledButtonsContainer";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9999;
`;

const StyledDialogBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background:color: var(--blue);
  background: linear-gradient(90deg, var(--blue) 35%, var(--light-blue) 100% );
  color: var(--white);
  padding: 2rem;
  margin: 0 auto;
  border-radius: 1.3rem;
  z-index: 10000;
  border: 1px solid var(--red);
  box-shadow: 0 0 10px var(--shadow);
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default function ConfirmDialogBox({ onConfirm, onCancel }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleConfirm() {
    setIsOpen(false);
    onConfirm();
  }

  function handleCancel() {
    setIsOpen(false);
    onCancel();
  }

  return (
    <>
      {isOpen && (
        <StyledOverlay>
          <StyledDialogBox>
            <h2>Are you sure you want to delete this trip?</h2>
            <StyledButtonsContainer>
              <StyledButton onClick={handleConfirm} className="deleteButton">
                Delete
              </StyledButton>
              <StyledButton onClick={handleCancel}>Cancel</StyledButton>
            </StyledButtonsContainer>
          </StyledDialogBox>
        </StyledOverlay>
      )}
    </>
  );
}
