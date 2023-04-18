import { useEffect, useState } from "react";
import StyledButton from "../StyledButton";
import StyledButtonsContainer from "../StyledButtonsContainer";
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
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [datesChanged, setDatesChanged] = useState(false);

  function handleSave() {
    setIsOpen(false);
    onSave(newStartDate, newEndDate);
  }

  function handleCancel() {
    setIsOpen(false);
    onCancel();
  }

  useEffect(() => {
    if (new Date(newEndDate) < new Date(newStartDate)) {
      setErrorMessage(
        "Oh! End date cannot be earlier than start date. Please match the dates"
      );
      setSuccessMessage(null);
      setDatesChanged(true);
    } else {
      setErrorMessage(null);
      if (datesChanged) {
        setSuccessMessage("Yay! Let's save it");
      }
    }
  }, [newStartDate, newEndDate, datesChanged]);

  return (
    <>
      {isOpen && (
        <StyledOverlay>
          <StyledDialogBox className="change-dates">
            <h2>Change trip dates</h2>
            <label htmlFor="newStartDate">Start date</label>
            <StyledInput
              type="date"
              name="newStartDate"
              id="newStartDate"
              aria-label="new Start Date"
              value={newStartDate}
              onChange={(event) => {
                setNewStartDate(event.target.value);
                setDatesChanged(true);
              }}
            />
            <label htmlFor="newEndDate">End date</label>
            <StyledInput
              type="date"
              name="newEndDate"
              id="newEndDate"
              aria-label="new End Date"
              value={newEndDate}
              onChange={(event) => {
                setNewEndDate(event.target.value);
                setDatesChanged(true);
              }}
              min={newStartDate}
            />
            {errorMessage && (
              <p>
                {errorMessage} <span>🐣</span>
              </p>
            )}
            {successMessage && (
              <p>
                {successMessage} <span>🎉</span>
              </p>
            )}
            <StyledButtonsContainer>
              <StyledButton
                className="changeButton"
                onClick={handleSave}
                disabled={errorMessage !== null}
              >
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
