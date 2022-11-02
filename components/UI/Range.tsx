import styled from "@emotion/styled";
import { FC } from "react";
import Flex from "../Flex";

interface RangeProps {
  values: string[];
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

const Range: FC<RangeProps> = ({ values }) => {
  return (
    <Flex direction="column" align="center">
      <StyledDataList id="range_list">
        {values.map((value, index) => (
          <StyledOption value={index + 1} label={value} key={index} />
        ))}
      </StyledDataList>
      <StyledRange type="range" list="range_list" min={1} max={values.length} />
    </Flex>
  );
};

export default Range;
