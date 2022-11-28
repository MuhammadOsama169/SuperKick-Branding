import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue:wght@300;400;600;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Bebas+Neue', Work-sans;
    margin: 0;
  }
  img {
    max-width: 100%;
}
`;
