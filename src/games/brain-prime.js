import { getRandomNumber } from '../../utils/random-value.js';
import startGame from '../index.js';
const description =
  'Answer "yes" if the given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const generateRound = () => {
  const number = getRandomNumber() + 1;
  const question = `Question: ${number}`; 
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startPrimeGame = () => {
  console.log(description);
  startGame(generateRound); 
};
export default startPrimeGame;