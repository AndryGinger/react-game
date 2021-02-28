import React from "react";
import { useGame } from "../contexts/GameContext";
import playersIndicators from "../constants/playersIndicators";
import { oneOf, arrayOf, number } from "prop-types";

import * as S from "./styled";

const Hex = ({ hexColor, pos }) => {
  const {
    currentHex,
    selectHex,
    makePlayerMove,
    playerAvailableCells
  } = useGame();

  const available = playerAvailableCells.some(
    (cell) => cell[0] === pos[0] && cell[1] === pos[1]
  );

  const handleClick = () => {
    if (currentHex && available) {
      makePlayerMove({ hexPos: pos, playerColor: playersIndicators.player });
    } else {
      selectHex({ hexPos: pos });
    }
  };

  return (
    <S.Hex
      selected={
        currentHex && currentHex[0] === pos[0] && currentHex[1] === pos[1]
      }
      available={available}
      hexColor={hexColor}
      onClick={handleClick}
    />
  );
};

Hex.propTypes = {
  hexColor: oneOf([0, 1, 2]).isRequired,
  pos: arrayOf(number).isRequired
};

export default Hex;
