import React from "react";
import styled from "@emotion/styled";
import logo from "./logo.svg";

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

function App() {
  const searchPhrases = () => {
    console.log("consulta frases");
  };

  return (
    <Content>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <Button onClick={searchPhrases}> Generar Frase</Button>
    </Content>
  );
}

export default App;
