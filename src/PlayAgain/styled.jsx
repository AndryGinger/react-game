import styled from "styled-components";
import Modal from "react-modal";

export const ModalWrapper = styled(Modal)`
  position: absolute;
  color: white;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  outline: none;
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
