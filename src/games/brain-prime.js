import startGame from '../index.js';
import { getRandomNumber } from '../../utils/random-value.js';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const description = 'Answer "yes" if the given number is prime. Otherwise answer "no".';
const gameLogic = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [`Question: ${randomNumber}`, correctAnswer];
};
export default () => startGame(description, gameLogic);