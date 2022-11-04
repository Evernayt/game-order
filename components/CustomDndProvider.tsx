import { FC, ReactNode, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import isTouchScreen from "../utils/isTouchScreen";

interface CustomDndProviderProps {
  children: ReactNode;
}

const CustomDndProvider: FC<CustomDndProviderProps> = ({ children }) => {
  const [isTouch, setIsTouch] = useState<boolean>(false);

  useEffect(() => {
    setIsTouch(isTouchScreen());
  }, []);

  return isTouch ? (
    <DndProvider backend={TouchBackend}>{children}</DndProvider>
  ) : (
    <DndProvider backend={HTML5Backend}>{children}</DndProvider>
  );
};

export default CustomDndProvider;
