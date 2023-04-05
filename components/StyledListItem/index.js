import styled from "styled-components";

const StyledListItem = styled.li`
  width: 85%;
  display: flex;
  justify-content: space-between;
  font-size: 1em;
  padding: 1rem;
  background-color: var(--blue);
  color: var(--white);
  border-radius: 1.3rem;

  &:hover {
    background-color: var(--yellow);
    color: var(--black);
    box-shadow: inset -5px -5px 30px var(--orange);
  }
`;

export default StyledListItem;
