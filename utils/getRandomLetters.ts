import { ALPHABET } from "../constants/game";

const getRandomLetters = (count: number) => {
  const letters: string[] = [];
  while (letters.length < count) {
    const r = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
    if (letters.indexOf(r) === -1) letters.push(r);
  }
  return letters;
};

export default getRandomLetters;
