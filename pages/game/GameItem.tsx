import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Flex from "../../components/Flex";
import OutlinedText from "../../components/UI/OutlinedText";
import { SpacerProps } from "../../utils/spacer";
import { useDrag } from "react-dnd";

interface GameItemProps extends SpacerProps {
  value: string;
  itemImage: StaticImageData;
}

interface DropResult {
  name?: string;
}

const GameItem: FC<GameItemProps> = ({ value, itemImage, ...props }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "GameItem",
      item: { name: value },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult<DropResult>();

        if (item && dropResult?.name) {
          console.log(item.name, dropResult.name, value);
        }
      },
    }),
    [value]
  );

  return (
    <div
      ref={drag}
      style={{
        backgroundColor: isDragging ? "blue" : "red",
      }}
    >
      <Flex
        align="center"
        justify="center"
        {...props}
        onClick={() => console.log(value)}
      >
        <OutlinedText text={value} />
        <Image src={itemImage} alt="" />
      </Flex>
    </div>
  );
};

export default GameItem;
