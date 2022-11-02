import styled from "@emotion/styled";
import { FC, HTMLAttributes, ReactNode } from "react";
import spacer, { SpacerProps } from "../utils/spacer";

interface FlexProps extends SpacerProps, HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: string;
  align?: string;
  justify?: string;
  gap?: string;
  width?: string;
  height?: string;
  position?: string;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  gap: ${(props) => props.gap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  ${spacer};
`;

const Flex: FC<FlexProps> = ({ children, ...props }) => {
  return <StyledFlex children={children} {...props} />;
};

export default Flex;
