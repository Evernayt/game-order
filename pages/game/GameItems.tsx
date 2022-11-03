import Flex from "../../components/Flex";
import { useGameContext } from "../../context/gameContext";
import GameItem from "./GameItem";

const GameItems = () => {
  const { gameItems } = useGameContext();

  return (
    <Flex gap="20px" height="100%" align="center">
      {gameItems.map((gameItem) => (
        <GameItem gameItem={gameItem} key={gameItem.value} />
      ))}
    </Flex>
  );
};

export default GameItems;
