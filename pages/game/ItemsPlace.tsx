import styled from "@emotion/styled";
import Image from "next/image";
import Flex from "../../components/Flex";
import { useGameContext } from "../../context/gameContext";
import ItemPlace from "./ItemPlace";

const StyledPlaceImage = styled(Image)`
  pointer-events: none;
  user-select: none;
`;

const ItemsPlace = () => {
  const { design, settedGameItems } = useGameContext();

  return (
    <Flex
      position="relative"
      align="center"
      justify="center"
      direction="column"
      width="100%"
    >
      <Flex position="absolute" justify="center" gap="4px" width="100%">
        {settedGameItems.map((settedGameItem) => (
          <ItemPlace
            circle={design.circle}
            settedGameItem={settedGameItem}
            key={settedGameItem.correctValue}
          />
        ))}
      </Flex>
      <StyledPlaceImage src={design.place} alt="" />
    </Flex>
  );
};

export default ItemsPlace;
