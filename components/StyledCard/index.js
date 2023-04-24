import styled from "styled-components";

const StyledCard = styled.article`
  position: relative;
  width: 85vw;
  display: flex;
  flex-direction: column;
  background-color: var(--blue);
  background: linear-gradient(90deg, var(--blue) 35%, var(--light-blue) 100%);
  color: var(--white);
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 1.3rem;
  border: 1px solid var(--light-blue);
  box-shadow: 0 0 10px var(--shadow);

  h3 {
    margin-right: 4.8rem;
    font-weight: 600;
  }

  fieldset {
    border: 1px solid var(--yellow);
    border-radius: 12px;
  }

  legend {
    color: var(--yellow);
    text-shadow: 1px 1px 1px var(--blue);
    font-weight: 600;
    margin-right: 0.5rem;
  }

  p {
    margin: 0.3rem;
    text-align: justify;
    text-justify: distribute;
  }
`;

export default StyledCard;
