import Flex from "../../components/Flex";
import MainContainer from "../../components/MainContainer";
import GameItems from "./GameItems";
import ItemsPlace from "./ItemsPlace";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GameContainer from "../../components/GameContainer";
import { useGameContext } from "../../context/gameContext";
import { useEffect } from "react";
import SortArrow from "./SortArrow";
import VictoryModal from "./VictoryModal";

const Game = () => {
  const { design, gameItems } = useGameContext();

  useEffect(() => {
    checkCompleted();
  }, [gameItems]);

  const checkCompleted = () => {
    if (gameItems.length === 0) {
      console.log("FIN");
    }
  };

  return (
    <MainContainer>
      <VictoryModal isShowing={true} hide={() => {}}/>
      <GameContainer bgImage={design.bg}>
        <DndProvider backend={HTML5Backend}>
          <Flex
            direction="column"
            align="center"
            justify="space-between"
            height="100%"
          >
            <GameItems />
            <SortArrow />
            <ItemsPlace />
          </Flex>
        </DndProvider>
      </GameContainer>
    </MainContainer>
  );
};

export default Game;
