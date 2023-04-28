import Link from "next/link";

import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 3.3rem;
  width: 100%;
  background-color: var(--yellow);
`;

const StyledLinkText = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
  text-decoration: none;
  color: var(--blue);
  font-size: 1.3em;
  font-weight: bold;
  transition: all 1s ease-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 0;
    height: 100%;
    background-color: var(--light-blue);
    transition: width 1s ease-out;
    z-index: -1;
    -webkit-transition: background-color 1s ease-out;
    -moz-transition: background-color 1s ease-out;
    -o-transition: background-color 1s ease-out;
    transition: background-color 1s ease-out;
  }

  &:hover {
    color: var(--white);
    background-color: var(--blue);

    &::after {
      width: 100%;
    }
  }
`;

export default function NavigationBar() {
  return (
    <StyledNav>
      <StyledLinkText href="/">Chill</StyledLinkText>
      <StyledLinkText href="/new-trip">+</StyledLinkText>
      <StyledLinkText href="/trips">My trips</StyledLinkText>
    </StyledNav>
  );
}
