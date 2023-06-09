import styled from "styled-components";

const StyledButtonsContainer = styled.ul`
  list-style: none;
  width: 70vw;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  button.deleteButton {
    background-color: var(--blue);
    color: var(--white);

    &:hover {
      background-color: var(--red);
    }
  }

  button.changeButton {
    background-color: var(--blue);
    color: var(--white);

    &:hover {
      background-color: var(--orange);
      color: var(--blue);
    }
  }
`;

export default StyledButtonsContainer;
