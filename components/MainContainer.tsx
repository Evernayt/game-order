import styled from "@emotion/styled";
import Head from "next/head";
import { FC, ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <StyledMainContainer>
      <Head>
        <title>Тренажер "Порядок" соло режим</title>
        <meta
          name="description"
          content="Требуется расставить объекты в правильном порядке: по возрастанию или убыванию."
        />
        <meta
          name="keywords"
          content="game, the order game, sorting game, simulator order, тренажер порядок, игра порядок"
        />
        <meta
          name="viewport"
          content="width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </StyledMainContainer>
  );
};

export default MainContainer;
