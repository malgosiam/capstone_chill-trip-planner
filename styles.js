import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --blue: #023E73;
  --light-blue: #2370B5;
  --bubble-blue: #c1f1ff;
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
    background: linear-gradient(90deg, var(--blue) 0%, var(--light-blue) 100% );
    background-attachment: fixed;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }

  h1 {
    text-align: center;
    color: var(--blue);
    text-shadow: none;
  }

  h1.homepageHeaderFont {
    font-size: 3.5rem;
  }

  @media (min-width: 415px) {
    h1.homepageHeaderFont {
    color: var(--white);
    text-shadow: 4px 4px 1px var(--blue);
  }
}

  h2 {
    text-align: center;
    color: var(--white);
    text-shadow: none;
  }

  h3 {
    color:var(--white);
    font-weight: normal;
    text-shadow: 4px 4px 1px var(--blue);
  }
`;
