import React from "react";
import HomePage from "./Components/HomePage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <section className="bg-black/70 ">
        <HomePage />
      </section>
    </>
  );
}

export default App;
