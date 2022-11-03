import styled from "@emotion/styled";
import Image from "next/image";
import { FC } from "react";
import Button, { ButtonVariants } from "../../components/UI/Button";
import { IMAGES } from "../../constants/game";

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
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
`;

const VictoryModal: FC<VictoryModalProps> = ({ isShowing, hide }) => {
  return isShowing ? (
    <StyledContainer>
      <StyledModalContainer>
        <StyledButton variant={ButtonVariants.primary}>Заново</StyledButton>
        <Image src={IMAGES.victory} alt="" />
      </StyledModalContainer>
    </StyledContainer>
  ) : null;
};

export default VictoryModal;
