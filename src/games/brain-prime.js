import startGame from '../index.js';
import { getRandomNumber } from '../../utils/random-value.js'; 
import readlineSync from 'readline-sync'; 
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
// Запускаем игру
export default () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(description);
  startGame(description, gameLogic);
};