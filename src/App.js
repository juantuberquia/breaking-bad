import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import ShowPhrase from "./components/ShowPhrase";
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
  transition: brackground-size 0.4s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

function App() {
  const [phrase, setPhrase] = useState({
    quote: "",
    author: "",
  });

  const searchPhrases = async () => {
    let api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    let result = await api.json();
    setPhrase(result[0]);
  };

  // cargar frase cuando inicie pag
  useEffect(() => {
    searchPhrases();
  }, []);

  return (
    <Content>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <ShowPhrase phrase={phrase} />
      <Button onClick={searchPhrases}> Generar Frase</Button>
    </Content>
  );
}

export default App;
