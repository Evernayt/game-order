import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes, FC } from "react";
import spacer, { SpacerProps } from "../../utils/spacer";
import useSound from "use-sound";
import { SOUNDS } from "../../constants/game";

export enum ButtonVariants {
  primary = "primary",
}

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    SpacerProps {
  children: string;
  onClick: () => void;
  variant?: ButtonVariants;
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  border-radius: 20px;
  background-color: #ffd748;
  font-size: 32px;
  font-weight: 700;
  padding: 8px 22px;
  color: #423f45;
  cursor: pointer;
  white-space: nowrap;
  &:active {
    transform: scale(0.98);
  }
  ${(props) =>
    props.variant === ButtonVariants.primary &&
    css`
      background-color: #38df7a;
      color: white;
      padding: 12px 72px;
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
    `}
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.56;
      cursor: default;
      &:active {
        transform: none;
      }
    `}
  ${spacer};
`;

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  disabled,
  ...props
}) => {
  const [play] = useSound(SOUNDS.clickingSound);

  const clickHandler = () => {
    play();
    onClick();
  };

  return (
    <StyledButton
      children={children}
      variant={variant}
      disabled={disabled}
      onClick={clickHandler}
      {...props}
    />
  );
};

export default Button;
