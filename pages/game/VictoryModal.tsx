import styled from "@emotion/styled";
import Image from "next/image";
import Router from "next/router";
import { FC } from "react";
import Button, { ButtonVariants } from "../../components/UI/Button";
import { IMAGES } from "../../constants/game";
import { keyframes } from "@emotion/react";
import { zoomInDown } from "react-animations";

const zoomInDownAnimation = keyframes`${zoomInDown}`;

interface VictoryModalProps {
  isShowing: boolean;
  hide: () => void;
}

const StyledContainer = styled.div`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  background-color: rgba(32, 21, 54, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContainer = styled.div`
  position: relative;
  animation: 1s ${zoomInDownAnimation};
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: max-content;
`;

const StyledVictoryImage = styled(Image)`
  pointer-events: none;
  user-select: none;
`;

const VictoryModal: FC<VictoryModalProps> = ({ isShowing, hide }) => {
  const restart = () => {
    hide();
    Router.push("/");
  };

  return isShowing ? (
    <StyledContainer>
      <StyledModalContainer>
        <StyledButton variant={ButtonVariants.primary} onClick={restart}>
          Заново
        </StyledButton>
        <StyledVictoryImage src={IMAGES.victory} alt="" />
      </StyledModalContainer>
    </StyledContainer>
  ) : null;
};

export default VictoryModal;
