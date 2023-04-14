import styled from "styled-components";
import NavigationBar from "../NavigationBar";

const StyledMain = styled.main`
  margin-bottom: 10rem;
`;

export default function Layout({ children }) {
  return (
    <>
      <StyledMain>{children}</StyledMain>
      <footer>
        <NavigationBar />
      </footer>
    </>
  );
}
