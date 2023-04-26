import styled from "styled-components";
import Logo from "../../public/assets/chicken1.svg";
import StyledOverlay from "../StyledOverlay";

const ShadowedLogo = styled(Logo)`
  filter: drop-shadow(0px 0px 40px var(--blue));
  margin-left: 1.8rem;
`;

const H2 = styled.h2`
  text-shadow: 0px 0px 10px var(--blue);
`;

const FadeInDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default function MyAnimation() {
  return (
    <StyledOverlay>
      <FadeInDiv>
        <ShadowedLogo />
        <H2>Yay!</H2>
        <H2>Your new place to see is added!</H2>
      </FadeInDiv>
    </StyledOverlay>
  );
}
