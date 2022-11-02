import Flex from "../../components/Flex";
import MainContainer from "../../components/MainContainer";
import DESIGNS from "../../constants/designs";
import { useGameContext } from "../../context/gameContext";
import GameItems from "./GameItems";
import ItemsPlace from "./ItemsPlace";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect } from "react";
import getRandomLetters from "../../utils/getRandomLetters";
import getRandomNumbers from "../../utils/getRandomNumbers";
import { NUMBERS } from "../../constants/game";

const Game = () => {
  const {
    itemsCount,
    sortingValue,
    setRandomValues,
    setCorrectValues,
    design,
    setDesign,
  } = useGameContext();

  useEffect(() => {
    generateValues();
    generateDesign();
  }, []);

  const generateValues = () => {
    let values: string[] = [];

    if (sortingValue === "А") {
      values = getRandomLetters(itemsCount);
    } else {
      const max = Number(sortingValue);
      const number = NUMBERS.find((x) => x.max === max);
      const min = number ? number.min : 1;
      values = getRandomNumbers(min, max, itemsCount).map(String);
    }

    setRandomValues(values);
    setCorrectValues([...values].sort());
  };

  const generateDesign = () => {
    const index = getRandomNumbers(0, DESIGNS.length - 1, 1)[0];
    setDesign(DESIGNS[index]);
  };

  return (
    <MainContainer>
      <DndProvider backend={HTML5Backend}>
        <Flex direction="column" align="center" justify="center" height="100%">
          <GameItems />
          <ItemsPlace placeImage={design.place} />
        </Flex>
      </DndProvider>
    </MainContainer>
  );
};

export default Game;
