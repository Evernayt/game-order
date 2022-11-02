import Flex from "../../components/Flex";
import { useGameContext } from "../../context/gameContext";
import getRandomNumbers from "../../utils/getRandomNumbers";
import GameItem from "./GameItem";

const GameItems = () => {
  const { itemsCount, randomValues, design } = useGameContext();

  const renderGameItems = () => {
    const itemIndexes = getRandomNumbers(
      0,
      design.items.length - 1,
      itemsCount
    );
    const gameItems = [];
    for (let i = 0; i < itemsCount; i++) {
      const randomValue = randomValues[i];
      const itemIndex = itemIndexes[i];
      gameItems.push(
        <GameItem
          value={randomValue}
          itemImage={design.items[itemIndex]}
          key={i}
        />
      );
    }
    return gameItems;
  };

  return <Flex gap="20px">{renderGameItems()}</Flex>;
};

export default GameItems;
