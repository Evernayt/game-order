const getRandomNumbers = (
  min: number,
  max: number,
  count: number,
  unique: boolean = true
): number[] => {
  const difference = max - min + 1;
  if (count > difference) {
    unique = false;
  }
  const numbers: number[] = [];
  while (numbers.length < count) {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    if (unique) {
      if (numbers.indexOf(r) === -1) numbers.push(r);
    } else {
      numbers.push(r);
    }
  }
  return numbers;
};

export default getRandomNumbers;
