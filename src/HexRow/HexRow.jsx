import React from "react";
import * as S from "./styled";
import Hex from "../Hex";

const HexRow = ({ hexes, rowIndex }) => {
  return (
    <S.HexRow>
      {hexes.map((hex, index) => (
        <Hex hexColor={hex} pos={[rowIndex, index]} key={index} />
      ))}
    </S.HexRow>
  );
};

export default HexRow;
