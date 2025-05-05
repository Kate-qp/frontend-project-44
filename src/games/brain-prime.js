import startGame from '../index.js'; // Убедитесь, что путь к index.js правильный
import { getRandomNumber } from '../../utils/random-value.js'; // Убедитесь, что путь к random-value.js правильный
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
  const randomNumber = getRandomNumber(1, 100); // Генерируем случайное число от 1 до 100
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no'; // Определяем правильный ответ
  return [`Question: ${randomNumber}`, correctAnswer]; // Возвращаем вопрос и правильный ответ в виде массива
};
// Запускаем игру
export default () => startGame(description, gameLogic);