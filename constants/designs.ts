import cookie1 from "../images/items/cookie-1.png";
import cookie2 from "../images/items/cookie-2.png";
import cookie3 from "../images/items/cookie-3.png";
import cookie4 from "../images/items/cookie-4.png";

import coin1 from "../images/items/coin-1.png";
import coin2 from "../images/items/coin-2.png";
import coin3 from "../images/items/coin-3.png";

import toy1 from "../images/items/toy-1.png";
import toy2 from "../images/items/toy-2.png";
import toy3 from "../images/items/toy-3.png";
import toy4 from "../images/items/toy-4.png";

import flower1 from "../images/items/flower-1.png";
import flower2 from "../images/items/flower-2.png";
import flower3 from "../images/items/flower-3.png";
import flower4 from "../images/items/flower-4.png";
import flower5 from "../images/items/flower-5.png";

import circle from "../images/circle.png";

import place1 from "../images/places/place-1.png";
import place2 from "../images/places/place-2.png";
import place3 from "../images/places/place-3.png";
import place4 from "../images/places/place-4.png";

import bg1 from "../images/backgrounds/bg-1.jpg";
import bg2 from "../images/backgrounds/bg-2.jpg";
import bg3 from "../images/backgrounds/bg-3.jpg";
import bg4 from "../images/backgrounds/bg-4.jpg";

import { IDesign } from "../models/IDesign";

const DESIGNS: IDesign[] = [
  {
    items: [cookie1, cookie2, cookie3, cookie4],
    place: place1,
    circle,
    bg: bg1,
  },
  {
    items: [coin1, coin2, coin3],
    place: place2,
    circle,
    bg: bg2,
  },
  {
    items: [toy1, toy2, toy3, toy4],
    place: place3,
    circle,
    bg: bg3,
  },
  {
    items: [flower1, flower2, flower3, flower4, flower5],
    place: place4,
    circle,
    bg: bg4,
  },
];

export default DESIGNS;
