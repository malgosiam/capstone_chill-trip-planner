import styled from "styled-components";
import StyledButton from "../StyledButton";
import Link from "next/link";

export default function NewTripForm({ onSubmit }) {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="location">Town</label>
        <StyledInput type="text" name="location" id="location" required />
        <label htmlFor="startDate">Start time</label>
        <StyledInput type="date" name="startDate" id="startDate" required />
        <label htmlFor="endDate">End time</label>
        <StyledInput type="date" name="endDate" id="endDate" required />
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
`;

const StyledInput = styled.input`
  height: 2rem;
  border-radius: 1.3rem;
  font-size: 16px;
  font-family: Arial;
  padding: 1.6rem;
  margin: 0.4rem 0;
  background-color: var(--blue);
  color: var(--white);
`;
