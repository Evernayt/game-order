import Flex from "../components/Flex";
import MainContainer from "../components/MainContainer";
import GameItems from "../components/Game/GameItems";
import ItemsPlace from "../components/Game/ItemsPlace";
import GameContainer from "../components/GameContainer";
import { useGameContext } from "../context/gameContext";
import { useEffect } from "react";
import SortArrow from "../components/Game/SortArrow";
import VictoryModal from "../components/Game/VictoryModal";
import useModal from "../hooks/useModal";
import useSound from "use-sound";
import { SOUNDS } from "../constants/game";
import Router from "next/router";
import CustomDndProvider from "../components/CustomDndProvider";

const Game = () => {
  const { design, gameItems, settedGameItems } = useGameContext();

  const [playVictory] = useSound(SOUNDS.victorySound);

  const { isShowing, toggle } = useModal();

  useEffect(() => {
    if (gameItems.length === 0 && settedGameItems.length === 0) {
      Router.push("/");
    }
    checkCompleted();
  }, [gameItems]);

  const checkCompleted = () => {
    if (gameItems.length === 0 && settedGameItems.length > 0) {
      playVictory();
      toggle();
    }
  };

  return (
    <MainContainer>
      <VictoryModal isShowing={isShowing} hide={toggle} />
      <GameContainer bgImage={design.bg}>
        <CustomDndProvider>
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
        </CustomDndProvider>
      </GameContainer>
    </MainContainer>
  );
};

export default Game;
