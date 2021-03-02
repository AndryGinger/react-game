import styled from "styled-components";
import Modal from "react-modal";

export const GameMenu = styled(Modal)`
  position: absolute;
  color: white;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  outline: none;
`;

export const BoardSize = styled.div`
  width: 450px;
  margin: 0 auto;
  margin-top: 20%;
  text-align: center;
`;

export const Input = styled.input`
  width: 300px;
  margin-top: 70px;
  background-color: transparent;
  -webkit-appearance: none;

  ::-webkit-slider-runnable-track {
    background: linear-gradient(
      90deg,
      rgba(5, 255, 0, 1) 0%,
      rgba(255, 235, 0, 1) 51%,
      rgba(255, 0, 0, 1) 100%
    );
    border: 0.2px solid #010101;
    border-radius: 1.3px;
    width: 100%;
    height: 30px;
    cursor: pointer;
  }
  ::-webkit-slider-thumb {
    margin-top: -20px;
    width: 16px;
    height: 70px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;

export const InputLabel = styled.label`
  font-size: 40px;
  display: block;
  text-align: center;
  margin: 10px 0;
  background: #000;
  border-radius: 10px;
  padding: 10px 0;
  border: 2px solid #fff;
  box-shadow: 0 0 0 7px #fff, 0 0 0 13px #000;
`;

export const RangeInputIndicator = styled.span`
  font-size: 40px;
  margin-right: 30px;
  border: 2px solid #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 2px #fff, 0 0 0 5px #000;
  background: #000;
  padding: 0 5px;

  :last-child {
    margin-right: 0;
    margin-left: 30px;
  }
`;

export const MenuWrapper = styled.div`
  position: relative;
  margin: 20px;
`;

export const PlayButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 20%;
  width: 200px;
  height: 100px;
  font-size: 32px;
  text-transform: uppercase;
  border-radius: 10px;
  border: 5px solid;
  cursor: pointer;
  box-shadow: -6px -6px 10px rgb(255 255 255 / 80%),
    6px 6px 10px rgb(255 255 255 / 80%);

  :hover {
    color: #72ff00;
    border-color: #72ff00;
    background: #173300;
  }
`;

Modal.setAppElement("body");
Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0)";
