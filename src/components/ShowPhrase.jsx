import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  padding: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;
  margin-top: 2rem;
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }

  @media (max-width: 485px) {
    p {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-size: 0.6rem;
      font-weight: bold;
      text-align: right;
      color: #666;
      margin-top: 1rem;
    }
  }
`;

const ShowPhrase = ({ phrase }) => {
  const { quote, author } = phrase;

  // if (Object.keys(phrase).length === 0) return null;

  if (quote === "" || author === "") {
    return null;
  }
  return (
    <Content>
      <h1>{quote}</h1>
      <p>{author}</p>
    </Content>
  );
};

export default ShowPhrase;
