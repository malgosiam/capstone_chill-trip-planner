import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --blue: #023E73;
  --light-blue: #2370B5;
  --yellow: #F2DD72;
  --orange: #F2AF5C;
  --white: #FFFFFF;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--light-blue);
  }
`;
