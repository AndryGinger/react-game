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

  const handleClick = (hexPos) => {
    if (currentHex) {
      makePlayerMove({ hexPos, playerColor: playersIndicators.player });
    } else {
      selectHex({ hexPos });
    }
  };

  const available = playerAvailableCells.some(
    (cell) => cell[0] === pos[0] && cell[1] === pos[1]
  );

  return (
    <S.Hex
      selected={
        currentHex && currentHex[0] === pos[0] && currentHex[1] === pos[1]
      }
      available={available}
      hexColor={hexColor}
      onClick={() => handleClick(pos)}
    />
  );
};

Hex.propTypes = {
  hexColor: oneOf([0, 1, 2]).isRequired,
  pos: arrayOf(number).isRequired
};

export default Hex;
