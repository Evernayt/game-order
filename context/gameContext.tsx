import { createContext, FC, ReactNode, useContext, useState } from "react";
import { SortVariants } from "../constants/game";

interface IGameContext {
  sorting: string;
  setSorting: (sorting: string) => void;
}

const defaultState: IGameContext = {
  sorting: SortVariants.asc,
  setSorting: () => {},
};

const GameContext = createContext<IGameContext>(defaultState);

export function useGameContext() {
  return useContext(GameContext);
}

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const [sorting, setSorting] = useState<string>(defaultState.sorting);

  return (
    <GameContext.Provider value={{ sorting, setSorting }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
