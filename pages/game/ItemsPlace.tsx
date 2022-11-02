import Image, { StaticImageData } from "next/image";
import { FC, useMemo } from "react";
import Flex from "../../components/Flex";
import { useGameContext } from "../../context/gameContext";
import ItemPlace from "./ItemPlace";

interface ItemsPlaceProps {
  placeImage: StaticImageData;
}

const ItemsPlace: FC<ItemsPlaceProps> = ({ placeImage }) => {
  const { correctValues } = useGameContext();

  const ItemPlaces = useMemo(() => {
    const itemPlaces = [];
    for (let i = 0; i < 6; i++) {
      itemPlaces.push(<ItemPlace correctValue={correctValues[i]} key={i} />);
    }
    return itemPlaces;
  }, [correctValues]);

  return (
    <Flex
      position="relative"
      align="center"
      justify="center"
      width="990px"
      height="323px"
    >
      <Flex position="absolute" gap="4px" ml="82px" mb="8px" left="0">
        {ItemPlaces}
      </Flex>

      <Image src={placeImage} alt="" />
    </Flex>
  );
};

export default ItemsPlace;
