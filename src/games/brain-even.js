import { getRandomNumber } from '../../utils/random-value.js'
import startGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const generateRound = () => {
  const number = getRandomNumber()
  const question = number
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const startEvenGame = () => {
  startGame(description, generateRound)
}

export default startEvenGame
