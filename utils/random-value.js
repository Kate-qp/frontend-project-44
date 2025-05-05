const getRandomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const getRandomIndex = (data) => {
  if (data.length === 0) {
    throw new Error('Array is empty')
  }
  return Math.floor(Math.random() * data.length)
}

export { getRandomNumber, getRandomIndex }
