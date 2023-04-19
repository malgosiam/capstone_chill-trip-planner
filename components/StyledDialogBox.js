import styled from "styled-components";

const StyledDialogBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background:color: var(--blue);
  background: linear-gradient(90deg, var(--blue) 35%, var(--light-blue) 100% );
  color: var(--white);
  padding: 2rem;
  margin: 0 auto;
  border-radius: 1.3rem;
  z-index: 10000;
  border: 1px solid var(--red);
  box-shadow: 0 0 10px var(--shadow);
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &.change-dates {
    border: 1px solid var(--orange);
  }
`;

export default StyledDialogBox;
