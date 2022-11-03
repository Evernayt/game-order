import styled from "@emotion/styled";
import { FC } from "react";
import spacer, { SpacerProps } from "../../utils/spacer";

interface OutlinedTextProps extends SpacerProps {
  text: string | number;
  size: string;
  strokeWidth: number;
  color?: string;
  strokeColor?: string;
  x?: string;
  y?: string;
}

const StyledSVG = styled.svg`
  position: absolute;
  pointer-events: none;
  user-select: none;
`;

const StylesOutlinedText = styled.text<OutlinedTextProps>`
  font-size: ${(props) => props.size};
  stroke-linejoin: round;
  stroke-width: ${(props) => `${props.strokeWidth * 2}px`};
  fill: ${(props) => props.color || "white"};
  stroke: ${(props) => props.strokeColor || "#242546"};
  paint-order: stroke;
  ${spacer}
`;

const OutlinedText: FC<OutlinedTextProps> = (props) => {
  return (
    <StyledSVG xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <StylesOutlinedText
        x={props.x || "50%"}
        y={props.y || "50%"}
        dominantBaseline="central"
        textAnchor="middle"
        {...props}
      >
        {props.text}
      </StylesOutlinedText>
    </StyledSVG>
  );
};

export default OutlinedText;
