import { useState } from "react";
import StyledButton from "../StyledButton";
import StyledButtonsContainer from "../StyledButtonsContainer";
import StyledDialogBox from "../StyledDialogBox";
import StyledOverlay from "../StyledOverlay";

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
          <StyledDialogBox role="dialog">
            <h2>Are you sure you want to delete this trip?</h2>
            <StyledButtonsContainer>
              <StyledButton
                className="deleteButton"
                onClick={handleConfirm}
                aria-label="Delete this trip"
              >
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
