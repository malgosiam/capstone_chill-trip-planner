import styled from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  width: 85%;
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  font-size: 1em;
  padding: 1rem;
  background-color: var(--blue);
  color: var(--white);
  border-radius: 1.3rem;
  border: 1px solid var(--light-blue);
  transition: all 0.3s ease-out;

  &:hover {
    background-color: var(--yellow);
    color: var(--black);
    box-shadow: 0 0 10px var(--shadow);
  }
`;
