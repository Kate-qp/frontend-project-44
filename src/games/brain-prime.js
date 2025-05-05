import startGame from '../index.js';
import getRandomNumber from '../../utils/random-value.js';
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
const DESCRIPTION = 'Answer "yes" if the given number is prime. Otherwise answer "no".';
const getData = () => {
  const number = getRandomNumber(1, 100);
  const question = `Question: ${number}`; 
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => startGame(DESCRIPTION, getData);