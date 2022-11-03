const descSort = (arr: string[]): string[] => {
  return arr.sort((a, b) => {
    if (a === b) return 0;
    return b < a ? -1 : 1;
  });
};

export default descSort;
