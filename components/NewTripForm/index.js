import styled from "styled-components";
import StyledButton from "../StyledButton";
import Link from "next/link";
import { useState } from "react";

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
        <StyledButton type="submit">Add</StyledButton>
        <Link href="/trips" passHref legacyBehavior>
          <StyledButton>Back</StyledButton>
        </Link>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 80vw;
  margin: 0 auto;
  color: var(--white);
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