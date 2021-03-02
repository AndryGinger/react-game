import styled, { createGlobalStyle } from "styled-components";
import Image from "../assets/images/background.jpg";

export const GameWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: url(${Image}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;
