enum SortVariants {
  asc = "asc",
  desc = "desc",
}

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

export { SortVariants, ITEM_COUNTS, SORTING_VALUES, ALPHABET, NUMBERS };
