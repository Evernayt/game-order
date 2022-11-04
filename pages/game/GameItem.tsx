import Image from "next/image";
import { FC } from "react";
import Flex from "../../components/Flex";
import OutlinedText from "../../components/UI/OutlinedText";
import { SpacerProps } from "../../utils/spacer";
import { useDrag } from "react-dnd";
import styled from "@emotion/styled";
import { useGameContext } from "../../context/gameContext";
import { ISettedGameItem } from "../../models/ISettedGameItem";
import { IGameItem } from "../../models/IGameItem";
import useSound from "use-sound";
import { SOUNDS } from "../../constants/game";

interface GameItemProps extends SpacerProps {
  gameItem: IGameItem;
}

interface DropResult {
  name?: string;
}

type StyledItemProps = {
  isDragging: boolean;
};

const StyledItem = styled.div<StyledItemProps>`
  filter: ${(props) =>
    props.isDragging ? "drop-shadow(0px 0px 50px #5ea6f4)" : "none"};
  transform: translate(0, 0);
`;

const GameItem: FC<GameItemProps> = ({ gameItem, ...props }) => {
  const { addSettedGameItem, removeGameItem } = useGameContext();

  const [playTake] = useSound(SOUNDS.takeSound);
  const [playCorrect] = useSound(SOUNDS.correctSound);
  const [playWrong] = useSound(SOUNDS.wrongSound);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "GameItem",
      item: { name: gameItem.value },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult<DropResult>();

        if (item && dropResult?.name) {
          if (item.name === dropResult.name) {
            const settedGameItem: ISettedGameItem = {
              correctValue: dropResult.name,
              image: gameItem.image,
            };
            addSettedGameItem(settedGameItem);
            removeGameItem(dropResult.name);
            playCorrect();
            return;
          }
        }

        playWrong();
      },
    }),
    [gameItem.value, playCorrect, playWrong]
  );

  return (
    <StyledItem
      ref={drag}
      isDragging={isDragging}
      onDragEnter={() => playTake()}
      onTouchStart={() => playTake()}
    >
      <Flex align="center" justify="center" {...props}>
        <OutlinedText text={gameItem.value} size="56px" strokeWidth={5} />
        <Image src={gameItem.image} alt="" />
      </Flex>
    </StyledItem>
  );
};

export default GameItem;
