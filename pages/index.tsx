import Card from "../components/UI/Card";
import MainContainer from "../components/MainContainer";
import Flex from "../components/Flex";
import Title from "../components/UI/Title";
import Range from "../components/UI/Range";
import Button, { ButtonVariants } from "../components/UI/Button";
import ButtonGroup from "../components/UI/ButtonGroup";
import Router from "next/router";
import {
  IMAGES,
  ITEM_COUNTS,
  NUMBERS,
  SORTING_VALUES,
  SORT_VARIANTS,
} from "../constants/game";
import { useGameContext } from "../context/gameContext";
import getRandomLetters from "../utils/getRandomLetters";
import getRandomNumbers from "../utils/getRandomNumbers";
import DESIGNS from "../constants/designs";
import GameContainer from "../components/GameContainer";
import { ISettedGameItem } from "../models/ISettedGameItem";
import { IGameItem } from "../models/IGameItem";
import { IDesign } from "../models/IDesign";
import descSort from "../utils/descSort";

const Home = () => {
  const {
    sorting,
    setSorting,
    itemsCount,
    setItemsCount,
    sortingValue,
    setSortingValue,
    setDesign,
    setGameItems,
    setSettedGameItems,
    setPlayBgSound,
  } = useGameContext();

  const sortingChange = (value: string) => {
    const findSorting = SORT_VARIANTS.find((x) => x.order === value);
    if (findSorting) setSorting(findSorting);
  };

  const startGame = () => {
    setPlayBgSound(true);

    const values = generateValues();
    const index = generateDesign();
    addGameItems(values, DESIGNS[index]);

    Router.push("/game");
  };

  const generateValues = (): string[] => {
    let values: string[] = [];

    if (sortingValue === "А") {
      values = getRandomLetters(itemsCount);
    } else {
      const max = Number(sortingValue);
      const number = NUMBERS.find((x) => x.max === max);
      const min = number ? number.min : 1;
      values = getRandomNumbers(min, max, itemsCount).map(String);
    }

    return values;
  };

  const addGameItems = (values: string[], design: IDesign) => {
    const itemIndexes = getRandomNumbers(
      0,
      design.items.length - 1,
      itemsCount
    );
    const gameItems: IGameItem[] = [];
    values.forEach((value, index) => {
      const itemIndex = itemIndexes[index];
      const image = design.items[itemIndex];
      gameItems.push({ value, image });
    });
    setGameItems(gameItems);

    const settedGameItems: ISettedGameItem[] = [];
    let sortedValues: string[] = [];
    if (sorting.order === "asc") {
      sortedValues = [...values].sort();
    } else {
      sortedValues = descSort(values);
    }
    sortedValues.forEach((correctValue) =>
      settedGameItems.push({ correctValue })
    );
    setSettedGameItems(settedGameItems);
  };

  const generateDesign = (): number => {
    const index = getRandomNumbers(0, DESIGNS.length - 1, 1)[0];
    setDesign(DESIGNS[index]);
    return index;
  };

  return (
    <MainContainer>
      <GameContainer bgImage={IMAGES.bgMenu}>
        <Flex align="center" justify="center" height="100%">
          <Card padding="57px 79px 52px 79px">
            <Title text="Кол-во предметов" mb="16px" />
            <Range
              values={ITEM_COUNTS}
              onChange={(value) => setItemsCount(Number(value))}
              defaultValue={itemsCount.toString()}
            />
            <Title text="Значения" mt="54px" mb="16px" />
            <Range
              values={SORTING_VALUES}
              onChange={(value) => setSortingValue(value)}
              defaultValue={sortingValue}
            />
            <ButtonGroup
              margin="75px 0 100px 0"
              buttons={[
                { text: SORT_VARIANTS[0].text, value: SORT_VARIANTS[0].order },
                { text: SORT_VARIANTS[1].text, value: SORT_VARIANTS[1].order },
              ]}
              defaultCheckedValue={sorting.order}
              onChange={(value) => sortingChange(value)}
            />
            <Flex justify="center">
              <Button variant={ButtonVariants.primary} onClick={startGame}>
                Играть
              </Button>
            </Flex>
          </Card>
        </Flex>
      </GameContainer>
    </MainContainer>
  );
};

export default Home;
