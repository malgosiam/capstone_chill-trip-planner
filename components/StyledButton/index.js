import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 2.9rem;
  border-radius: 1rem;
  background-color: var(--yellow);
  color: var(--black);
  font-size: 1em;
  display: inline-block;

  &:hover {
    background-color: var(--blue);
    color: var(--white);
    box-shadow: 0 0 70px var(--white);
  }
`;

export default StyledButton;
