import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Flex from "../../components/Flex";
import OutlinedText from "../../components/UI/OutlinedText";
import { useDrop } from "react-dnd";
import { ISettedGameItem } from "../../models/ISettedGameItem";
import { keyframes } from "@emotion/react";
import { bounceIn } from "react-animations";

const bounceInAnimation = keyframes`${bounceIn}`;

interface ItemPlaceProps {
  circle: StaticImageData;
  settedGameItem: ISettedGameItem;
}

type StyledItemPlaceProps = {
  isOver: boolean;
};

type StyledCircleProps = {
  circle: string;
};

const StyledItemPlace = styled.div<StyledItemPlaceProps>`
  width: 131px;
  height: 131px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOver ? "#104987" : "transparent")};
  opacity: ${(props) => (props.isOver ? 0.5 : 1)};
`;

const StyledCircle = styled.div<StyledCircleProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.circle});
`;

const StyledFlex = styled(Flex)`
  animation: 1s ${bounceInAnimation};
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  pointer-events: none;
  user-select: none;
`;

const ItemPlace: FC<ItemPlaceProps> = ({ circle, settedGameItem }) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "GameItem",
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
      drop: () => ({ name: settedGameItem.correctValue }),
    }),
    [settedGameItem.correctValue]
  );

  return (
    <StyledItemPlace ref={drop} isOver={isOver}>
      <StyledCircle circle={circle.src}>
        {settedGameItem.image && (
          <StyledFlex align="center" justify="center">
            <OutlinedText
              text={settedGameItem.correctValue}
              size="56px"
              strokeWidth={5}
            />
            <StyledImage src={settedGameItem.image} alt="" />
          </StyledFlex>
        )}
      </StyledCircle>
    </StyledItemPlace>
  );
};

export default ItemPlace;
