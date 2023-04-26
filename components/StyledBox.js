import { renderToStaticMarkup } from "react-dom/server";
import styled from "styled-components";
import Arrow from "../public/assets/arrow.svg";

const StyledBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: var(--blue);
  background: linear-gradient(90deg, var(--blue) 35%, var(--light-blue) 100%);
  color: var(--white);
  margin: 0.5rem 0;
  border-radius: 1.3rem;
  border: 1px solid var(--light-blue);
  box-shadow: 0 0 10px var(--shadow);

  label {
    padding: 0 4rem 0 1rem;
  }

  select {
    flex: 1;
    padding: 0.5rem;
    margin: 0.5rem;
    border: 1px solid var(--light-blue);
    border-radius: 0.6rem;
    font-size: 1em;
    background-color: var(--white);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url(${`data:image/svg+xml;utf8,${encodeURIComponent(
      renderToStaticMarkup(<Arrow />)
    )}`});
    background-size: 1.1rem;
    background-position: calc(100% - 0.5rem) center;
    background-repeat: no-repeat;
    padding-right: 1.5rem;
  }
`;

export default StyledBox;
