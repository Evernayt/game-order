import styled from "@emotion/styled";
import { FC, HTMLAttributes, ReactNode } from "react";
import spacer, { SpacerProps } from "../../utils/spacer";

interface CardProps extends HTMLAttributes<HTMLDivElement>, SpacerProps {
  children: ReactNode;
  borderRadius?: string;
  height?: string;
  width?: string;
}

const StyledCard = styled.div<CardProps>`
  border: 20px solid transparent;
  border-radius: ${(props) => props.borderRadius || "40px"};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: linear-gradient(#fff 0 0) padding-box,
    linear-gradient(to bottom, rgb(127, 117, 240), rgb(16, 31, 50)) border-box;
  ${spacer};
`;

const Card: FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard children={children} {...props} />;
};

export default Card;
