import { playGame } from '../src/index.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[Math.floor(Math.random() * operators.length)];
};

const generateQuestion = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = getRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const answer = String(eval(question)); // Используйте eval с осторожностью
    return { question, answer };
};

const gameLogic = {
    instructions: 'What is the result of the expression?',
    getQuestion: generateQuestion,
};

playGame(gameLogic);