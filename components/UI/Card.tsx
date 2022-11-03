import styled from "@emotion/styled";
import { FC, HTMLAttributes, ReactNode } from "react";
import spacer, { SpacerProps } from "../../utils/spacer";

interface CardProps extends HTMLAttributes<HTMLDivElement>, SpacerProps {
  children: ReactNode;
  borderRadius?: string;
  borderColor?: string;
  height?: string;
  width?: string;
}

const StyledCard = styled.div<CardProps>`
  border: 20px solid ${(props) => props.borderColor || "black"};
  border-radius: ${(props) => props.borderRadius || "40px"};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: white;
  ${spacer};
`;

const Card: FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard children={children} {...props} />;
};

export default Card;
