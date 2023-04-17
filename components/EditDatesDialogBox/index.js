import { useState } from "react";
import styled from "styled-components";
import StyledButton from "../StyledButton";
import StyledButtonsContainer from "../StyledButtonsContainer";
import { useNewTripStore } from "../../stores/useNewTripStore";

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

const StyledInput = styled.input`
  height: 2rem;
  border-radius: 1.3rem;
  border: 1px solid var(--light-blue);
  font-size: 16px;
  font-family: Arial;
  padding: 1.6rem;
  margin: 0.4rem 0;
  background-color: var(--blue);
  color: var(--white);
`;

export default function EditDatesDialogBox({
  onSave,
  onCancel,
  startDate,
  endDate,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [newStartDate, setNewStartDate] = useState(startDate || "");
  const [newEndDate, setNewEndDate] = useState(endDate || "");

  function handleSave() {
    setIsOpen(false);
    onSave(newStartDate, newEndDate);
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
            <h2>Change trip dates</h2>
            <StyledInput
              type="date"
              value={newStartDate}
              onChange={(event) => setNewStartDate(event.target.value)}
            />
            <StyledInput
              type="date"
              value={newEndDate}
              onChange={(event) => setNewEndDate(event.target.value)}
            />
            <StyledButtonsContainer>
              <StyledButton onClick={handleSave}>Save</StyledButton>
              <StyledButton onClick={handleCancel}>Cancel</StyledButton>
            </StyledButtonsContainer>
          </StyledDialogBox>
        </StyledOverlay>
      )}
    </>
  );
}
