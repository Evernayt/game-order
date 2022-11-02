import Card from "../components/UI/Card";
import MainContainer from "../components/MainContainer";
import Flex from "../components/Flex";
import Title from "../components/UI/Title";
import Range from "../components/UI/Range";
import Button, { ButtonVariants } from "../components/UI/Button";
import ButtonGroup from "../components/UI/ButtonGroup";
import Router from "next/router";
import { ITEM_COUNTS, SORTING_VALUES, SortVariants } from "../constants/game";
import { useGameContext } from "../context/gameContext";

const Home = () => {
  const {
    sorting,
    setSorting,
    itemsCount,
    setItemsCount,
    sortingValue,
    setSortingValue,
  } = useGameContext();

  const sortingChange = (value: string) => {
    setSorting(value);
  };

  const startGame = () => {
    Router.push("/game");
  };

  return (
    <MainContainer>
      <Flex align="center" justify="center" height="100%">
        <Card borderColor="blue">
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
              { text: "По возрастанию", value: SortVariants.asc },
              { text: "По убыванию", value: SortVariants.desc },
            ]}
            defaultCheckedValue={sorting}
            onChange={(value) => sortingChange(value)}
          />
          <Flex justify="center">
            <Button variant={ButtonVariants.primary} onClick={startGame}>
              Играть
            </Button>
          </Flex>
        </Card>
      </Flex>
    </MainContainer>
  );
};

export default Home;
