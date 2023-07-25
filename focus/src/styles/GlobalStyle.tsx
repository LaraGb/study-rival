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
    font-family: 'Inter', sans-serif;
    border-radius: 0px;
    background: linear-gradient(180deg, #383838, #16171B 100%);
    color: ${pageTheme.color.text.label};

  
  }
`;

export default GlobalStyle;
