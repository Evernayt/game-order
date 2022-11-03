import styled from "@emotion/styled";
import { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";

interface GameContainerProps {
  children: ReactNode;
  bgImage: StaticImageData;
}

const StyledGameContainer = styled.div<GameContainerProps>`
  width: 980px;
  height: 810px;
  border-radius: 12px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(${(props) => props.bgImage.src});
`;

const GameContainer: FC<GameContainerProps> = ({ children, bgImage }) => {
  return (
    <StyledGameContainer bgImage={bgImage}>{children}</StyledGameContainer>
  );
};

export default GameContainer;
