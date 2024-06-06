"use client";
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
:root{
  --clr-text-900:#323233;
  --clr-text-800:#646466;
  --clr-text-secondary:#C9C9CA;
  --clr-text-500:#FBFBFF;
  --clr-bg-200:#a5a5ab;
  --clr-bg-300:#777880;
  --clr-bg-400:#4a4b56;
  --clr-bg-500:#1D1E2C;
  --clr-bg-600:#171823;
  --clr-bg-700:#11121a;
  --clr-bg-800:#0c0c12;
  --clr-primary-900:#33250a;
  --clr-primary-800:#654a14;
  --clr-primary-700:#986e1f;
  --clr-primary-600:#ca9329;
  --clr-primary-500:#FDB833;
  --clr-primary-400:#fdc65c;
  --clr-primary-300:#fed485;
  --clr-primary-200:#fee3ad;
  --clr-primary-100:#fff1d6;
  --clr-accent-100:#fdd3e7;
  --clr-accent-200:#fca8ce;
  --clr-accent-300:#fa7cb6;
  --clr-accent-400:#f9519d;
  --clr-accent-500:#F72585;
  --clr-accent-600:#c61e6a;
  --clr-accent-700:#941650;
  --clr-accent-800:#630f35;
  --clr-accent-900:#31071b;
  --main-heading-font:3rem, 4vw, 5rem;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html {
  font-size: 62.5%;
}
body {
  min-height: 100vh;
  display:flex;
  flex-direction:column;
  line-height: 1.5;
  font-size: 1.6rem;
  color:var(--clr-text-500);
  background-color:var(--clr-bg-500);
}
input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}
a {
  color: inherit;
  text-decoration: none;
}


p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}


@media only screen and (max-width:39em){
  html {
  font-size: 50%;
}
}
`;
export default GlobalStyles;
