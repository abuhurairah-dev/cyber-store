import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  * { box-sizing: border-box; }
  html,body,#root { height: 100%; }
  body {
    font-family: 'Poppins', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: #f5f6f7;
    color: #111827;
    margin: 0;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  a { color: inherit; text-decoration: none; }
  button { font-family: inherit; }
`;
