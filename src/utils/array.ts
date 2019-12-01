const getRandomIndex = <T>(items: T[]): number => {
  return Math.floor(Math.random() * items.length);
};

const getRandomElement = <T>(items: T[]): T => {
  return items[getRandomIndex(items)];
};

export { getRandomElement, getRandomIndex };
