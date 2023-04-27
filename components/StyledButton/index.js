import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 2.9rem;
  border-radius: 1rem;
  background-color: var(--yellow);
  color: var(--blue);
  font-size: 1em;
  display: inline-block;
  margin-top: 1.1rem;
  border: 1px solid var(--light-blue);
  transition: all 0.5s ease-out;
  width: 77%;
  white-space: nowrap;

  &:hover {
    background-color: var(--blue);
    color: var(--white);
    box-shadow: 0 0 10px var(--shadow);
  }
`;

export default StyledButton;
