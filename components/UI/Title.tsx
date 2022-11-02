import styled from "@emotion/styled";
import { FC, HTMLAttributes } from "react";
import spacer, { SpacerProps } from "../../utils/spacer";

interface TitleProps extends SpacerProps, HTMLAttributes<HTMLDivElement> {
  text: string;
}

const StyledTitle = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: 700;
  color: #423f45;
  ${spacer};
`;

const Title: FC<TitleProps> = ({ text, ...props }) => {
  return <StyledTitle children={text} {...props} />;
};

export default Title;
