import StyledButton from "../StyledButton";
import Link from "next/link";
import { useState } from "react";
import StyledContainer from "../StyledContainer";
import StyledInput from "../StyledInput";
import StyledForm from "../StyledForm";

export default function NewTripForm({ onSubmit }) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleStartDateChange(event) {
    const value = event.target.value;
    setStartDate(value);
    setEndDate(value);
  }

  function handleEndDateChange(event) {
    const value = event.target.value;
    setEndDate(value);
  }
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="location">Town</label>
        <StyledInput type="text" name="location" id="location" required />
        <label htmlFor="startDate">Start date</label>
        <StyledInput
          type="date"
          name="startDate"
          id="startDate"
          aria-label="Start Date"
          value={startDate}
          onChange={handleStartDateChange}
          required
        />
        <label htmlFor="endDate">End date</label>
        <StyledInput
          type="date"
          name="endDate"
          id="endDate"
          aria-label="End Date"
          value={endDate}
          onChange={handleEndDateChange}
          min={startDate}
          required
        />
        <StyledContainer>
          <StyledButton type="submit">Add</StyledButton>
          <Link href="/trips" passHref legacyBehavior>
            <StyledButton>Back</StyledButton>
          </Link>
        </StyledContainer>
      </StyledForm>
    </>
  );
}
