import { createGlobalStyle } from 'styled-components';
import { serif } from './fonts';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Merriweather:300,400,400i|Muli:400,700&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: ${serif}    
  }

`;
