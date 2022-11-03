import styled from "@emotion/styled";
import Image from "next/image";
import Flex from "../../components/Flex";
import OutlinedText from "../../components/UI/OutlinedText";
import { useGameContext } from "../../context/gameContext";

type StyledArrowProps = {
  order: "asc" | "desc";
};

const StyledArrow = styled.div<StyledArrowProps>`
  position: relative;
  align-self: ${(props) => (props.order === "asc" ? "flex-start" : "flex-end")};
  margin: 8px 24px;
  pointer-events: none;
  user-select: none;
`;

const SortArrow = () => {
  const { sorting } = useGameContext();

  return (
    <StyledArrow order={sorting.order}>
      <Flex justify="center" align="center">
        <OutlinedText
          text={sorting.text}
          size={"36px"}
          strokeWidth={3}
          y="40%"
        />
        <Image src={sorting.arrow} alt="" />
      </Flex>
    </StyledArrow>
  );
};

export default SortArrow;
