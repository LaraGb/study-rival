import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import pageTheme from "./styles/pageTheme.tsx";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={pageTheme}>
       <App/>
     </ThemeProvider>
  </React.StrictMode>
);
