import Flex from "../../components/Flex";
import MainContainer from "../../components/MainContainer";
import { useGameContext } from "../../context/gameContext";
import GameItems from "./GameItems";

const Game = () => {
  const { sorting } = useGameContext();

  return (
    <MainContainer>
      <Flex direction="column" align="center" justify="center" height="100%">
        <GameItems />
        <div>sort</div>
      </Flex>
    </MainContainer>
  );
};

export default Game;
