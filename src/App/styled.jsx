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

export const Footer = styled.div`
  z-index: 9999;
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  text-align: center;
`;

export const FooterLink = styled.a`
  display: inline-block;
  background: #fff;
  border-radius: 5px;
  padding: 5px;
  width: 100px;
  height: 30px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

export const FooterText = styled.span`
  color: #fff;
  font-size: 28px;
  margin: 0 20%;
`;
