import React from "react";
import { useGame } from "../contexts/GameContext";
import playersIndicators from "../constants/playersIndicators";
import { oneOf, arrayOf, number } from "prop-types";

import * as S from "./styled";

const Hex = ({ hexColor, pos }) => {
  const { currentHex, selectHex, makePlayerMove } = useGame();

  const handleClick = (hexPos) => {
    if (currentHex) {
      makePlayerMove({ hexPos, playerColor: playersIndicators.player });
    } else {
      selectHex({ hexPos });
    }
  };

  return (
    <S.Hex
      selected={
        currentHex && currentHex[0] === pos[0] && currentHex[1] === pos[1]
      }
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
