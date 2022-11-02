import { FC, useState } from "react";
import { SpacerProps } from "../../utils/spacer";
import Flex from "../Flex";
import Button from "./Button";

export interface IButtonGroupItem {
  text: string;
  value: string;
}

interface ButtonGroup extends SpacerProps {
  buttons: IButtonGroupItem[];
  defaultCheckedValue: string;
  onChange: (value: string) => void;
}

const ButtonGroup: FC<ButtonGroup> = ({
  buttons,
  defaultCheckedValue,
  onChange,
  ...props
}) => {
  const [checkedValue, setCheckedValue] = useState<string>(defaultCheckedValue);

  const clickHandler = (value: string) => {
    setCheckedValue(value);
    onChange(value);
  };

  return (
    <Flex justify="center" gap="36px" {...props}>
      {buttons.map((button) => (
        <Button
          disabled={checkedValue === button.value}
          onClick={() => clickHandler(button.value)}
          key={button.value}
        >
          {button.text}
        </Button>
      ))}
    </Flex>
  );
};

export default ButtonGroup;
