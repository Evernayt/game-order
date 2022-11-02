import styled from "@emotion/styled";
import { FC, HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  borderColor?: string;
  height?: string;
  width?: string;
}

const StyledCard = styled.div<CardProps>`
  border: 20px solid ${(props) => props.borderColor || "black"};
  border-radius: 40px;
  padding: 57px 79px 52px 79px;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

const Card: FC<CardProps> = ({ children, ...props }) => {
  return <StyledCard children={children} {...props} />;
};

export default Card;
