import { createContext, FC, ReactNode, useContext, useState } from "react";
import DESIGNS from "../constants/designs";
import { SORT_VARIANTS } from "../constants/game";
import { IDesign } from "../models/IDesign";
import { IGameItem } from "../models/IGameItem";
import { ISettedGameItem } from "../models/ISettedGameItem";
import { ISortVariant } from "../models/ISortVariant";

interface IGameContext {
  sorting: ISortVariant;
  setSorting: (sorting: ISortVariant) => void;
  itemsCount: number;
  setItemsCount: (itemsCount: number) => void;
  sortingValue: string;
  setSortingValue: (sortingValues: string) => void;
  design: IDesign;
  setDesign: (design: IDesign) => void;
  gameItems: IGameItem[];
  setGameItems: (gameItems: IGameItem[]) => void;
  removeGameItem: (value: string) => void;
  settedGameItems: ISettedGameItem[];
  setSettedGameItems: (settedGameItems: ISettedGameItem[]) => void;
  addSettedGameItem: (settedGameItem: ISettedGameItem) => void;
  playBgSound: boolean;
  setPlayBgSound: (playBgSound: boolean) => void;
}

const defaultState: IGameContext = {
  sorting: SORT_VARIANTS[0],
  setSorting: () => {},
  itemsCount: 2,
  setItemsCount: () => {},
  sortingValue: "А",
  setSortingValue: () => {},
  design: DESIGNS[0],
  setDesign: () => {},
  gameItems: [],
  setGameItems: () => {},
  removeGameItem: () => {},
  settedGameItems: [],
  setSettedGameItems: () => {},
  addSettedGameItem: () => {},
  playBgSound: false,
  setPlayBgSound: () => {},
};

const GameContext = createContext<IGameContext>(defaultState);

export function useGameContext() {
  return useContext(GameContext);
}

interface GameProviderProps {
  children: ReactNode;
}

const GameProvider: FC<GameProviderProps> = ({ children }) => {
  const [sorting, setSorting] = useState<ISortVariant>(defaultState.sorting);
  const [itemsCount, setItemsCount] = useState<number>(defaultState.itemsCount);
  const [sortingValue, setSortingValue] = useState<string>(
    defaultState.sortingValue
  );
  const [design, setDesign] = useState<IDesign>(defaultState.design);
  const [gameItems, setGameItems] = useState<IGameItem[]>(
    defaultState.gameItems
  );
  const [settedGameItems, setSettedGameItems] = useState<ISettedGameItem[]>(
    defaultState.settedGameItems
  );
  const [playBgSound, setPlayBgSound] = useState<boolean>(
    defaultState.playBgSound
  );

  const addSettedGameItem = (settedGameItem: ISettedGameItem) => {
    setSettedGameItems((prevState) =>
      prevState.map((state) =>
        state.correctValue === settedGameItem.correctValue
          ? settedGameItem
          : state
      )
    );
  };

  const removeGameItem = (value: string) => {
    setGameItems((prevState) =>
      prevState.filter((state) => state.value !== value)
    );
  };

  const store: IGameContext = {
    sorting,
    setSorting,
    itemsCount,
    setItemsCount,
    sortingValue,
    setSortingValue,
    design,
    setDesign,
    gameItems,
    setGameItems,
    removeGameItem,
    settedGameItems,
    setSettedGameItems,
    addSettedGameItem,
    playBgSound,
    setPlayBgSound,
  };

  return <GameContext.Provider value={store}>{children}</GameContext.Provider>;
};

export default GameProvider;
