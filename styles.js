import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --blue: #023E73;
  --light-blue: #2370B5;
  --yellow: #F2DD72;
  --orange: #F2AF5C;
  --red: #D94625;
  --white: #FFFFFF;
  --shadow: rgba(33,33,33,0.2);
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
    background: linear-gradient(90deg, var(--blue) 0%, var(--light-blue) 100% )
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  h3 {
    color:var(--white);
    font-weight: normal;
    text-shadow: 4px 4px 1px var(--blue);
  } 
`;
