import React from "react";
import * as S from "./styled";
import Hex from "../Hex";

const HexRow = ({ hexes }) => {
  return (
    <S.HexRow>
      {hexes.map((hex, index) => (
        <Hex hexColor={hex} key={index} />
      ))}
    </S.HexRow>
  );
};

export default HexRow;
