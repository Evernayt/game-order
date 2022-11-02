import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Flex from "../../components/Flex";
import OutlinedText from "../../components/UI/OutlinedText";
import { useDrop } from "react-dnd";

interface ItemPlaceProps {
  correctValue: string;
  itemImage?: StaticImageData;
}

const StyledItemPlace = styled.div`
  width: 131px;
  height: 131px;
  border-radius: 50%;
  &:hover {
    background-color: gainsboro;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const ItemPlace: FC<ItemPlaceProps> = ({ correctValue, itemImage }) => {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: "GameItem",
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
      drop: () => ({ name: correctValue }),
    }),
    [correctValue]
  );

  return (
    <div ref={drop} style={{ backgroundColor: isOver ? "red" : "white" }}>
      <StyledItemPlace onClick={() => console.log("da")}>
        {itemImage && (
          <Flex align="center" justify="center">
            {<OutlinedText text="da" />}
            {<StyledImage src={itemImage} alt="" />}
          </Flex>
        )}
      </StyledItemPlace>
    </div>
  );
};

export default ItemPlace;
