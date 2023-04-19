import styled from "styled-components";
import Logo2 from "../../public/assets/chicken2.svg";

const StyledBubbles = styled.div`
  .bubble {
    opacity: 0;
    position: absolute;
    top: -200px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    border-radius: 50%;
    border: 1px solid var(--white);
    background: var(--bubble-blue);
    -webkit-animation: bubbles-appear, bubbles;
    animation: bubbles-appear, bubbles;
    -webkit-animation-timing-function: ease-out, ease-in-out;
    animation-timing-function: ease-out, ease-in-out;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;

    &.bigBubble {
      height: 30px;
      width: 30px;
      -webkit-animation-duration: 0.05s, 5s;
      animation-duration: 0.05s, 5s;
      -webkit-animation-delay: 0.9s, 1s;
      animation-delay: 0.9s, 1s;
    }
    &.mediumBubble {
      top: -30px;
      left: 120px;
      height: 25px;
      width: 25px;
      -webkit-animation-duration: 0.05s, 4.9s;
      animation-duration: 0.05s, 4.9s;
      -webkit-animation-delay: 0.8s, 1s;
      animation-delay: 0.8s, 1s;
    }
    &.smallBubble {
      top: -120px;
      left: -120px;
      height: 15px;
      width: 15px;
      -webkit-animation-duration: 0.05s, 4.6s;
      animation-duration: 0.05s, 4.6s;
      -webkit-animation-delay: 0.7s, 1s;
      animation-delay: 0.7s, 1s;
    }
  }

  @-webkit-keyframes bubbles {
    from {
      @include transform(translate3d(0px, 0px, 0px));
    }
    to {
      @include transform(translate3d(0, -100px, 0px));
    }
  }

  @keyframes bubbles {
    from {
      @include transform(translate3d(0px, 0px, 0px));
    }
    to {
      @include transform(translate3d(0, -100px, 0px));
    }
  }

  @-webkit-keyframes bubbles-appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }

  @keyframes bubbles-appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }
  }
`;

export default function LogoBubble() {
  return (
    <>
      <StyledBubbles>
        <div className="bubble bigBubble"></div>
        <div className="bubble mediumBubble"></div>
        <div className="bubble smallBubble"></div>
      </StyledBubbles>
      <Logo2 />
    </>
  );
}
