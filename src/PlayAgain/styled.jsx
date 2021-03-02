import styled from "styled-components";
import Modal from "react-modal";

export const ModalWrapper = styled(Modal)`
  position: absolute;
  color: white;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  outline: none;

  -webkit-animation: fadeIn 1s;
  animation: fadeIn 2s;

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ScoreWrapper = styled.div`
  position: absolute;
  left: -150px;

  ${({ enemy }) =>
    enemy &&
    `
    left: unset;
    right: -150px;
  `};
`;

export const ScoreHex = styled.div`
  background: black;
  position: relative;
  height: 120px;
  width: 120px;

  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  :before,
  :after {
    position: absolute;
    content: "";
  }

  :before {
    top: 4px;
    left: 4px;
    height: calc(100% - 8px);
    width: calc(100% - 8px);
    background-color: #ff0000;

    -webkit-clip-path: polygon(
      50% 0%,
      100% 25%,
      100% 75%,
      50% 100%,
      0% 75%,
      0% 25%
    );
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  ${({ enemy }) =>
    enemy &&
    `
    :before {
      background-color: #0028ff;
    }
  `};
`;

export const Score = styled.span`
  font-size: 72px;
  position: absolute;
  left: 0;
  top: 20px;
  width: 100%;
  text-align: center;

  ${({ enemy }) =>
    enemy &&
    `
    :before {
      left: unset;
      right: 0;
    }
  `};
`;

export const GameStatus = styled.span`
  display: block;
  margin: 0 auto;
  width: 450px;
  height: 200px;
  font-size: 72px;
  text-transform: uppercase;
  cursor: pointer;
  color: #72ff00;
  text-align: center;

  ${({ gameStatus }) =>
    gameStatus !== "You Win" &&
    `
    color: #ff0000;
  `};
`;

export const RetryButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 350px;
  height: 200px;
  font-size: 72px;
  text-transform: uppercase;
  border-radius: 10px;
  border: 5px solid;
  cursor: pointer;
  box-shadow: -6px -6px 10px rgb(255 255 255 / 80%),
    6px 6px 10px rgb(255 255 255 / 80%);

  :hover {
    color: #ff0000;
    border-color: #ff0000;
    background: #330000;
  }
`;
