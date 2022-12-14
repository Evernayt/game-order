import arrowAsc from "../images/arrow-asc.png";
import arrowDesc from "../images/arrow-desc.png";
import { ISortVariant } from "../models/ISortVariant";
import bgMenu from "../images/backgrounds/bg-menu.jpg";
import victory from "../images/victory.png";
import clickingSound from "../sounds/clicking.wav";
import takeSound from "../sounds/take.wav";
import correctSound from "../sounds/correct.wav";
import wrongSound from "../sounds/wrong.wav";
import victorySound from "../sounds/victory.wav";
import bgSound from "../sounds/bg.mp3";

const SORT_VARIANTS: ISortVariant[] = [
  {
    order: "asc",
    text: "По возрастанию",
    arrow: arrowAsc,
  },
  {
    order: "desc",
    text: "По убыванию",
    arrow: arrowDesc,
  },
];
const ITEM_COUNTS = ["2", "3", "4", "5"];
const SORTING_VALUES = ["А", "9", "19", "50", "99", "999"];
const ALPHABET = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const NUMBERS = [
  { min: 1, max: 9 },
  { min: 10, max: 19 },
  { min: 20, max: 50 },
  { min: 51, max: 99 },
  { min: 100, max: 999 },
];
const IMAGES = { bgMenu, victory };
const SOUNDS = {
  clickingSound,
  takeSound,
  correctSound,
  wrongSound,
  victorySound,
  bgSound,
};

export {
  SORT_VARIANTS,
  ITEM_COUNTS,
  SORTING_VALUES,
  ALPHABET,
  NUMBERS,
  IMAGES,
  SOUNDS,
};
