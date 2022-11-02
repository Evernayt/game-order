import styled from "@emotion/styled";
import Image from "next/image";
import Flex from "../../components/Flex";
import items from "../../constants/items";

const StylesItemValue = styled.div`
  position: absolute;
  font-size: 52px;
  text-shadow: #242546 5px 0px 0px, #242546 4.90033px 0.993347px 0px,
    #242546 4.60531px 1.94709px 0px, #242546 4.12668px 2.82321px 0px,
    #242546 3.48353px 3.58678px 0px, #242546 2.70151px 4.20736px 0px,
    #242546 1.81179px 4.6602px 0px, #242546 0.849836px 4.92725px 0px,
    #242546 -0.145998px 4.99787px 0px, #242546 -1.13601px 4.86924px 0px,
    #242546 -2.08073px 4.54649px 0px, #242546 -2.94251px 4.04248px 0px,
    #242546 -3.68697px 3.37732px 0px, #242546 -4.28444px 2.57751px 0px,
    #242546 -4.71111px 1.67494px 0px, #242546 -4.94996px 0.7056px 0px,
    #242546 -4.99147px -0.291871px 0px, #242546 -4.83399px -1.27771px 0px,
    #242546 -4.48379px -2.2126px 0px, #242546 -3.95484px -3.05929px 0px,
    #242546 -3.26822px -3.78401px 0px, #242546 -2.4513px -4.35788px 0px,
    #242546 -1.53666px -4.75801px 0px, #242546 -0.560763px -4.96845px 0px,
    #242546 0.437495px -4.98082px 0px, #242546 1.41831px -4.79462px 0px,
    #242546 2.34258px -4.41727px 0px, #242546 3.17346px -3.86382px 0px,
    #242546 3.87783px -3.15633px 0px, #242546 4.4276px -2.32301px 0px,
    #242546 4.80085px -1.39708px 0px, #242546 4.98271px -0.415447px 0px;
  color: white;
`;

const GameItem = () => {
  return (
    <Flex align="center" justify="center">
      <StylesItemValue>123</StylesItemValue>
      <Image src={items[0].image} alt="" />
    </Flex>
  );
};

export default GameItem;
