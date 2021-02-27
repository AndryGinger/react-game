import styled from "styled-components";

export const Hex = styled.div`
  background: black;
  display: inline-block;
  height: 60px;
  position: relative;
  width: 60px;

  -webkit-clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

  :not(:last-child) {
    margin-right: 4px;
  }

  :before,
  :after {
    position: absolute;
    content: "";
  }

  :before {
    top: 2px;
    left: 2px;
    height: calc(100% - 4px);
    width: calc(100% - 4px);
    background: #b3b3b3;

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

  ${({ hexColor }) =>
    hexColor === 1 &&
    `
    :before {
      background-color: red;
    }
  `};

  ${({ hexColor }) =>
    hexColor === 2 &&
    `
    :before {
      background-color: blue;
    }
  `};
`;
