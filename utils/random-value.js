const getRandomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (data) => Math.floor(Math.random() * data.length);

export { getRandomNumber, getRandomIndex };
