import { createGlobalStyle } from "styled-components";
import pageTheme from "./pageTheme";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
 
  html{
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.2rem;
    background:linear-gradient(175deg,#500dbd, #180339);
    color: ${pageTheme.color.text.page};
    
  }

  a{
    text-decoration: none;
    color: currentColor;
  }

  ul{
    list-style: none;
  }
`;

export default GlobalStyle;
