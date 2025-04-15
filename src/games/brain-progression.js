import { getRandomNumber } from '../../utils/random-value.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const progression = generateProgression(length, start, step);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  const correctAnswer = hiddenValue.toString();

  return [question, correctAnswer];
};

const startProgressionGame = () => {
  startGame(description, generateRound);
};

export default startProgressionGame;
