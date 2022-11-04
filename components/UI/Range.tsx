import styled from "@emotion/styled";
import { FC, useState } from "react";
import Flex from "../Flex";
import useSound from "use-sound";
import { SOUNDS } from "../../constants/game";

interface RangeProps {
  values: string[];
  onChange: (value: string) => void;
  defaultValue: string;
}

const StyledRange = styled.input`
  -webkit-appearance: none;
  min-width: 100%;
  height: 21px;
  border-radius: 10px;
  background-color: #ffd748;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #104987;
    height: 23px;
    width: 23px;
    border-radius: 50%;
  }
`;

const StyledDataList = styled.datalist`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
`;

const StyledOption = styled.option`
  width: 40px;
  color: #4f4b61;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const Range: FC<RangeProps> = ({ values, onChange, defaultValue }) => {
  const [rangeIndex, setRangeIndex] = useState<number>(
    values.indexOf(defaultValue)
  );

  const [play] = useSound(SOUNDS.clickingSound);

  const changeHandler = (index: number) => {
    play();
    setRangeIndex(index);
    const value = values[index];
    onChange(value);
  };

  return (
    <Flex direction="column" align="center">
      <StyledDataList id="range_list">
        {values.map((value, index) => (
          <StyledOption label={value} key={index} />
        ))}
      </StyledDataList>
      <StyledRange
        type="range"
        list="range_list"
        min={0}
        max={values.length - 1}
        value={rangeIndex}
        onChange={(e) => changeHandler(Number(e.target.value))}
      />
    </Flex>
  );
};

export default Range;
