import Logo from "../public/assets/chicken1.svg";
import Background from "../public/assets/background.svg";
import styled from "styled-components";
import StyledContainer from "../components/StyledContainer";
import StyledHeader from "../components/StyledHeader";
import { useState } from "react";
import { useEffect } from "react";
import LogoBubble from "../components/LogoBubble";

const UpDownDiv = styled.div`
margin-top: 20px; 
animation: up-down linear 4s;
animation-iteration-count: infinite;
transform-origin: 50% 50%;
-webkit-animation: up-down linear 4s;
-webkit-animation-iteration-count: infinite;
-webkit-transform-origin: 50% 50%;
-moz-animation: up-down linear 4s;
-moz-animation-iteration-count: infinite;
-moz-transform-origin: 50% 50%;
-o-animation: up-down linear 4s;
-o-animation-iteration-count: infinite;
-o-transform-origin: 50% 50%;
-ms-animation: up-down linear 4s;
-ms-animation-iteration-count: infinite;
-ms-transform-origin: 50% 50%;


@keyframes up-down{
0% {
  transform:  translate(1px,20px)  ;
}
24% {
  transform:  translate(1px,30px)  ;
}
50% {
  transform:  translate(1px,12px)  ;
}
74% {
  transform:  translate(1px,22px)  ;
}
100% {
  transform:  translate(1px,22px)  ;
}
}

@-moz-keyframes up-down{
0% {
  -moz-transform:  translate(1px,20px)  ;
}
24% {
  -moz-transform:  translate(1px,30px)  ;
}
50% {
  -moz-transform:  translate(1px,12px)  ;
}
74% {
  -moz-transform:  translate(1px,22px)  ;
}
100% {
  -moz-transform:  translate(1px,22px)  ;
}
}

@-webkit-keyframes up-down {
0% {
  -webkit-transform:  translate(1px,20px)  ;
}
24% {
  -webkit-transform:  translate(1px,30px)  ;
}
50% {
  -webkit-transform:  translate(1px,12px)  ;
}
74% {
  -webkit-transform:  translate(1px,22px)  ;
}
100% {
  -webkit-transform:  translate(1px,22px)  ;
}
}

@-o-keyframes up-down {
0% {
  -o-transform:  translate(1px,20px)  ;
}
24% {
  -o-transform:  translate(1px,30px)  ;
}
50% {
  -o-transform:  translate(1px,12px)  ;
}
74% {
  -o-transform:  translate(1px,22px)  ;
}
100% {
  -o-transform:  translate(1px,22px)  ;
}
}

@-ms-keyframes up-down {
0% {
  -ms-transform:  translate(1px,20px)  ;
}
24% {
  -ms-transform:  translate(1px,30px)  ;
}
50% {
  -ms-transform:  translate(1px,12px)  ;
}
74% {
  -ms-transform:  translate(1px,22px)  ;
}
100% {
  -ms-transform:  translate(1px,22px)  ;
}
 `;

function SvgSwitcher() {
  const [svgComponents, setSvgComponents] = useState([Logo, LogoBubble]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % svgComponents.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, svgComponents.length]);

  const SvgComponent = svgComponents[currentIndex];

  const marginTop = currentIndex === 1 ? `-80px` : `0`;

  return (
    <div style={{ marginTop }}>
      <SvgComponent />
    </div>
  );
}

const BackgroundSvg = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: none;

  @media (max-width: 414px) {
    display: block;
  }
`;

function BackgroundImage() {
  return (
    <BackgroundSvg>
      <Background />
    </BackgroundSvg>
  );
}

export default function HomePage() {
  return (
    <>
      <StyledHeader>
        <h1 className="homepageHeaderFont">Chill trip planner</h1>
      </StyledHeader>
      <BackgroundImage />
      <StyledContainer>
        <UpDownDiv>
          <SvgSwitcher />
        </UpDownDiv>
      </StyledContainer>
    </>
  );
}
