import "../styles/globals.css";
import type { AppProps } from "next/app";
import GameProvider from "../context/gameContext";
import GlobalSound from "../components/GlobalSound";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameProvider>
      <Component {...pageProps} />
      <GlobalSound />
    </GameProvider>
  );
}
