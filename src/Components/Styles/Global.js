import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Bebas+Neue', Work-sans;
    margin: 0;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
