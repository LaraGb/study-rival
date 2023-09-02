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
    font-size: 1.2rem;
    background-color:black;
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
