import { useEffect, useRef } from "react";
import { SOUNDS } from "../constants/game";
import { useGameContext } from "../context/gameContext";

const GlobalSound = () => {
  const { playBgSound } = useGameContext();

  const audioRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    if (!playBgSound) return;
    audioRef.current = new Audio();
    audioRef.current.src = SOUNDS.bgSound;
    audioRef.current.loop = true;
    audioRef.current.volume = 0.05;
    audioRef.current.play();
  }, [playBgSound]);

  return null;
};

export default GlobalSound;
