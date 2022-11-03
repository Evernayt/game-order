import { StaticImageData } from "next/image";

export interface ISortVariant {
  order: "asc" | "desc";
  text: string;
  arrow: StaticImageData;
}
