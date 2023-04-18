import { useState } from "react";
import StyledButton from "../StyledButton";
import StyledButtonsContainer from "../StyledButtonsContainer";
import { useNewTripStore } from "../../stores/useNewTripStore";
import StyledDialogBox from "../StyledDialogBox";
import StyledOverlay from "../StyledOverlay";
import StyledInput from "../StyledInput";

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
          <StyledDialogBox className="change-dates">
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
              min={newStartDate}
            />
            <StyledButtonsContainer>
              <StyledButton className="changeButton" onClick={handleSave}>
                Save
              </StyledButton>
              <StyledButton onClick={handleCancel}>Cancel</StyledButton>
            </StyledButtonsContainer>
          </StyledDialogBox>
        </StyledOverlay>
      )}
    </>
  );
}
