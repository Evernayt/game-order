import { createContext, FC, ReactNode, useContext, useState } from "react";
import DESIGNS from "../constants/designs";
import { SortVariants } from "../constants/game";
import { IDesign } from "../models/IDesign";

interface IGameContext {
  sorting: string;
  setSorting: (sorting: string) => void;
  itemsCount: number;
  setItemsCount: (itemsCount: number) => void;
  sortingValue: string;
  setSortingValue: (sortingValues: string) => void;
  randomValues: string[];
  setRandomValues: (randomValues: string[]) => void;
  correctValues: string[];
  setCorrectValues: (correctValues: string[]) => void;
  design: IDesign;
  setDesign: (design: IDesign) => void;
}

const defaultState: IGameContext = {
  sorting: SortVariants.asc,
  setSorting: () => {},
  itemsCount: 2,
  setItemsCount: () => {},
  sortingValue: "А",
  setSortingValue: () => {},
  randomValues: [],
  setRandomValues: () => {},
  correctValues: [],
  setCorrectValues: () => {},
  design: DESIGNS[0],
  setDesign: () => {},
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
  const [itemsCount, setItemsCount] = useState<number>(defaultState.itemsCount);
  const [sortingValue, setSortingValue] = useState<string>(
    defaultState.sortingValue
  );
  const [randomValues, setRandomValues] = useState<string[]>(
    defaultState.randomValues
  );
  const [correctValues, setCorrectValues] = useState<string[]>(
    defaultState.correctValues
  );
  const [design, setDesign] = useState<IDesign>(defaultState.design);

  const store: IGameContext = {
    sorting,
    setSorting,
    itemsCount,
    setItemsCount,
    sortingValue,
    setSortingValue,
    randomValues,
    setRandomValues,
    design,
    setDesign,
    correctValues,
    setCorrectValues,
  };

  return <GameContext.Provider value={store}>{children}</GameContext.Provider>;
};

export default GameProvider;
